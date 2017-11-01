import React from 'react';

const ExerciseList = (props) => {
  return (
    <div id="exerciseList">
      <h3>Exercise List to Choose From</h3>
      {props.exercises.map(exercise => {
        return (
          <div className="exerciseListItem">
            <h4>{exercise.name}</h4>
            <button
              className="btn btn-default"
              >
              Add to workout
            </button>
          </div>
        );
      })}
    </div>
  );

};

export default ExerciseList;
