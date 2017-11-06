import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as workoutActions from '../../actions/workoutActions';
import ExerciseList from '../exercise/ExerciseList';

class ExerciseBlock extends React.Component {
  constructor(props) {
    super(props);

    this.addExerciseToBlock = this.addExerciseToBlock.bind(this);
  }

  addExerciseToBlock(exercise) {
      this.props.actions.addExerciseToBlock(exercise, this.props.index);
  }

  render() {
    return(
      <div className="panel panel-default exercise-block">
        <div className="panel-body">
          Card block
        </div>
        <div className="panel-body">
          Add exercises
          <ExerciseList handleAddExercise={this.addExerciseToBlock}/>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(workoutActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseBlock);
