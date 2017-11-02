import {combineReducers} from 'redux';
import exercises from './exerciseReducer';
import workouts from './workoutsArchiveReducer';
const rootReducer = combineReducers({
  exercises,
  workouts
});

export default rootReducer;
