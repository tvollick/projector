import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ExerciseList from '../exercise/ExerciseList';

class CreateWorkoutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>New Workout</h1>

        <ExerciseList exercises={this.props.exercises} />

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
