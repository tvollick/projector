import React from 'react';
import ExerciseList from '../exercise/ExerciseList';

const ExerciseBlock = props => {
  return(
    <div className="panel panel-default exercise-block">
      <div className="panel-body">
        Card block
      </div>
      <div className="panel-body">
        Add exercises
        <ExerciseList /> 
      </div>
    </div>
  );
};

export default ExerciseBlock;
