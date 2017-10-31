import React from 'react';
import WorkoutListItem from './WorkoutListItem';

const WorkoutList = (props) => {

  return(
    <ul className="list-group">
      {props.workouts.map(workout => {
        return <WorkoutListItem workout={workout} />
      })}
    </ul>
  );
};

export default WorkoutList;
