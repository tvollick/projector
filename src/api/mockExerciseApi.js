import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const exercises = [
  {
    name:"Kettle Bell Swings",
    metrics:[
      {name:"Reps",type:"1"},
      {name:"Weight",type:"5"}
    ]
  },
  {
    name:"Squats",
    metrics:[
      {name:"Reps",type:"1"},
      {name:"Weight",type:"5"}
    ]
  },
  {
    name:"Dead Lifts",
    metrics:[
      {name:"Reps",type:"1"},
      {name:"Weight",type:"5"}
    ]
  },
  {
    name:"Bench Press",
    metrics:[
      {name:"Reps",type:"1"},
      {name:"Weight",type:"5"}
    ]
  },
  {
    name:"Limit Boulder Problem",
    metrics:[
      {name:"Grade",type:"3"},
      {name:"",type:""}
    ]
  },
  {
    name:"4x4 Sport",
    metrics:[
      {name:"Grade",type:"4"},
      {name:"Reps",type:"1"}
    ]
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (exercise) => {
  return replaceAll(exercise.title, ' ', '-');
};

class ExerciseApi {
  static getAllExercises() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], exercises));
      }, delay);
    });
  }

  static saveExercise(exercise) {
    exercise = Object.assign({}, exercise); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minExerciseTitleLength = 1;
        if (exercise.title.length < minExerciseTitleLength) {
          reject(`Title must be at least ${minExerciseTitleLength} characters.`);
        }

        if (exercise.id) {
          const existingExerciseIndex = exercises.findIndex(a => a.id == exercise.id);
          exercises.splice(existingExerciseIndex, 1, exercise);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new exercises in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          exercise.id = generateId(exercise);
          exercise.watchHref = `http://www.pluralsight.com/exercises/${exercise.id}`;
          exercises.push(exercise);
        }

        resolve(exercise);
      }, delay);
    });
  }

  static deleteExercise(exerciseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfExerciseToDelete = exercises.findIndex(exercise => {
          exercise.id == exerciseId;
        });
        exercises.splice(indexOfExerciseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ExerciseApi;
