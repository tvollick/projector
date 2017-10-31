import React from 'react';


const SetRow = props => {
  const set = props.data;

  return(
    <li>
      <strong>{set.name}: </strong>
      {set.metrics.map(metric => {
        return(
          <span>{metric.name}:{metric.value}, </span>
        );
      })}
    </li>
  );
};

const SuperSet = props => {
  const data = props.data;

  return (
    <div className="superSet">
      <h5>Repeated: {data.repetitions}</h5>
      <ul>
        {data.sets.map(set => {
          return <SetRow data={set} />
        })}
      </ul>
    </div>
  );
};

const WorkoutListItem = props => {
  const data = props.workout;

  return (
    <li className="list-group-item">
      <h3>{data.dateTimeStarted}</h3>
      {data.superSets.map(superSet => {
        return(
          <SuperSet data={superSet} />
        );
      })}
    </li>
  )
};

export default WorkoutListItem;
