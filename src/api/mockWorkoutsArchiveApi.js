import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const workoutsArchive = [
  {
      id: 25,
      startTime: "20171023 10:13",
      workoutType: "Kettle Bell Session",
      blocks: [
        {
          repetitions: 1, 
          exercises: [
            {
              name: 'Rowing machine',
              category: 'cardio',
              metrics: [
                {
                  name: "time",
                  value: 15000
                },
                {
                  name: "resistance",
                  value: 6
                }
              ]
            },
            {
              name: 'Kettle Bell Swings',
              category: 'kettle bells',
              metrics: [
                {
                  name: "reps",
                  value: 15
                },
                {
                  name: "weight",
                  value: 45
                }
              ]
            },
            {
              name: 'Crimp and two finger',
              category: 'cardio',
              metrics: [
                {
                  name: "time",
                  value: 1500
                }
              ]
            }
          ]
        }
      ]
  }

];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (workout) => {
  return replaceAll(workout.title, ' ', '-');
};

class WorkoutsArchiveApi {
  static getAllWorkouts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], workoutsArchive));
      }, delay);
    });
  }

  static saveWorkout(workout) {
    workout = Object.assign({}, workout); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minWorkoutTitleLength = 1;
        if (workout.title.length < minWorkoutTitleLength) {
          reject(`Title must be at least ${minWorkoutTitleLength} characters.`);
        }

        if (workout.id) {
          const existingWorkoutIndex = workoutsArchive.findIndex(a => a.id == workout.id);
          workoutsArchive.splice(existingWorkoutIndex, 1, workout);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new workoutsArchive in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          workout.id = generateId(workout);
          workout.watchHref = `http://www.pluralsight.com/workoutsArchive/${workout.id}`;
          workoutsArchive.push(workout);
        }

        resolve(workout);
      }, delay);
    });
  }

  static deleteWorkout(workoutId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfWorkoutToDelete = workoutsArchive.findIndex(workout => {
          workout.id == workoutId;
        });
        workoutsArchive.splice(indexOfWorkoutToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default WorkoutsArchiveApi;
