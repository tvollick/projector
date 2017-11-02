import React from 'react';
import {connect} from 'react-redux';

const ExerciseList = (props) => {
  return (
    <div id="exerciseList">
      <h3>Exercise List to Choose From</h3>
      <table>
        <tbody>
          {props.exercises.map(exercise => {
            return (
              <tr>
                <td>
                  <h4>{exercise.name}</h4>
                </td>
                <td>
                  <button
                    className="btn btn-default btn-sm"
                    >
                    Add to workout
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
