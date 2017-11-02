import React from 'react';
import {connect} from 'react-redux';
import WorkoutList from './WorkoutList';

const getWorkoutsResponse = [
  {
    workout_id: 25,
    dateTimeStarted: "2017-10-26 07:15:22",
    dateTimeEnded: "2017-10-26 08:15:22",
    superSets: [ // array of sets
      {// set
        dateTimeStarted: "2017-10-26 07:15:22",
        repetitions: 1,
        sets: [
          {
            name: "Rowing Machine",
            metrics: [
              {
                name: "Duration",
                value: 360
              },
              {
                name: "Resistance",
                value: 8
              }
            ]
          }
        ]
      }, {
        dateTimeStarted: "2017-10-26 7:35:22",
        repetitions: 3,
        sets: [
          {
            name: "Kettle Bell Swings",
            metrics: [
              {
                name: "LBS",
                value: 45
              },
              {
                name: "Reps",
                value: 15
              }
            ]
          },
          {
            name: "Pushups",
            metrics: [
              {
                name: "Reps",
                value: 15
              }
            ]
          },
          {
            name: "Goblet Squats",
            metrics: [
              {
                name: "LBS",
                value: 55
              },
              {
                name: "Reps",
                value: 8
              }
            ]
          }
        ]
      }
    ]
  },
  {
    workout_id: 26,
    dateTimeStarted: "2017-10-28 07:15:22",
    dateTimeEnded: "2017-10-28 08:15:22",
    superSets: [ // array of sets
      {// set
        dateTimeStarted: "2017-10-28 07:15:22",
        repetitions: 1,
        sets: [
          {
            name: "Rowing Machine",
            metrics: [
              {
                name: "Duration",
                value: 360
              },
              {
                name: "Resistance",
                value: 8
              }
            ]
          }
        ]
      }, {
        dateTimeStarted: "2017-10-26 7:35:22",
        repetitions: 3,
        sets: [
          {
            name: "Kettle Bell Swings",
            metrics: [
              {
                name: "LBS",
                value: 45
              },
              {
                name: "Reps",
                value: 15
              }
            ]
          },
          {
            name: "Pushups",
            metrics: [
              {
                name: "Reps",
                value: 15
              }
            ]
          },
          {
            name: "Goblet Squats",
            metrics: [
              {
                name: "LBS",
                value: 55
              },
              {
                name: "Reps",
                value: 8
              }
            ]
          }
        ]
      }
    ]
  }
];

class WorkoutsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: getWorkoutsResponse
    };
  }

  render() {
    const {workouts} = this.props;
    return (
      <div id="workouts-page">
        <h1>My Workouts</h1>

        {workouts.map(workout => {
          return <h1>{workout.startTime}</h1>;
        })}

      </div>
    );
  }
}


function mapStateToProps(state,ownProps) {
  return{
    workouts: state.workouts
  };
}
export default connect(mapStateToProps)(WorkoutsPage);
