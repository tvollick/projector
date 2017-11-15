import {combineReducers} from 'redux';
import exercises from './exerciseReducer';
import workouts from './workoutsReducer';
import workout from './workoutReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  exercises,
  workouts,
  workout,
  ajaxCallsInProgress
});

export default rootReducer;
