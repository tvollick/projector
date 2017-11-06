import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as workoutActions from '../../actions/workoutActions';
import WorkoutForm from './WorkoutForm';

class ManageWorkoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: Object.assign({}, this.props.workout),
      errors: {}
    };
    this.handleAddBlock = this.handleAddBlock.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
  }

  handleAddBlock() {
    this.props.actions.addBlockToWorkout();
  }

  saveWorkout(event) {
    event.preventDefault();
    this.props.actions.saveWorkout(this.state.workout);
  }

  render() {
    const {workout} = this.props;
    return(
      <WorkoutForm
        blocks={workout.blocks}
        handleAddBlock={this.handleAddBlock}
        handleSave={this.saveWorkout}
        />
    );
  }
}

ManageWorkoutPage.PropTypes = {
  workout: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {
  const workoutId = ownProps.params.id; // 'workout/:id'
  return{
    exercises: state.exercises,
    workout: state.workout
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(workoutActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageWorkoutPage);
