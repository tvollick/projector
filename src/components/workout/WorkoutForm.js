import React, {PropTypes} from 'react';
import ExerciseBlock from './ExerciseBlock';

const WorkoutForm = ({blocks, handleAddBlock, handleSave, saving}) => {

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
          disable={saving}
          >
          {saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}

WorkoutForm.propTypes = {
  saving: React.PropTypes.bool,
}


export default WorkoutForm;
