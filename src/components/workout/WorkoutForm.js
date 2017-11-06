import React from 'react';
import ExerciseBlock from './ExerciseBlock';

const WorkoutForm = ({blocks, handleAddBlock, handleSave}) => {

  return(
    <div id="workoutForm">
      <div id="exerciseBlocks">
        {blocks.map((block, idx) => {
          return(
            <ExerciseBlock
              key={idx}
              index={idx}
              block={block}
            />
          );
        })}
      </div>
      <div className="btn-group">
        <button
          className="btn btn-default"
          onClick={handleAddBlock}
          >
          Add Block
        </button>
      </div>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={handleSave}
          >
          Save Workout
        </button>
      </div>
    </div>
  );
}

export default WorkoutForm;
