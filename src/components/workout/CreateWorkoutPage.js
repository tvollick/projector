import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ExerciseBlock from './ExerciseBlock';

class CreateWorkoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: {
        blocks: [
          {
            repetitions: 1, 
            exercises: [

            ]
          }
        ]
      }
    };
  }

  render() {
    return(
      <div id="createWorkoutPage">
        <h1>New Workout</h1>
        <div id="exerciseBlocks">
          {this.state.workout.blocks.map(block => {
            return(
              <ExerciseBlock block={block} />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return{
    exercises: state.exercises
  };
}
export default connect(mapStateToProps)(CreateWorkoutPage);
