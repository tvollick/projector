import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as workoutActions from '../../actions/workoutActions';
import WorkoutForm from './WorkoutForm';
import toastr from 'toastr';

class ManageWorkoutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: Object.assign({}, this.props.workout),
      errors: {},
      saving: false
    };
    this.handleAddBlock = this.handleAddBlock.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
  }

  handleAddBlock() {
    this.props.actions.addBlockToWorkout();
  }

  saveWorkout(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveWorkout(this.state.workout)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Workout saved.');
    this.context.router.push('/workouts');
  }


  render() {
    const {workout} = this.props;
    return(
      <WorkoutForm
        blocks={workout.blocks}
        handleAddBlock={this.handleAddBlock}
        handleSave={this.saveWorkout}
        saving={this.state.saving}
        />
    );
  }
}

ManageWorkoutPage.PropTypes = {
  workout: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired

};

//Pull in the React Router context so router is available on this.context.router.
ManageWorkoutPage.contextTypes = {
  router: PropTypes.object
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
