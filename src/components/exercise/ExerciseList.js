import React from 'react';
import {connect} from 'react-redux';

const ExerciseList = ({exercises, handleAddExercise}) => {
  return (
    <div id="exerciseList">
      <h3>Exercise List to Choose From</h3>
      <table>
        <tbody>
          {exercises.map((exercise, idx) => {

            return (
              <tr key={idx}>
                <td>
                  <h4>{exercise.name}</h4>
                </td>
                <td>
                  <button
                    className="btn btn-default btn-sm"
                    onClick={() => {
                      handleAddExercise(exercise)
                    }}
                    >
                    Add
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

};

function mapStateToProps(state, ownProps) {
  return {
    exercises: state.exercises
  };
}

export default connect(mapStateToProps)(ExerciseList);
