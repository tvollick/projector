import {combineReducers} from 'redux';
import exercises from './exerciseReducer';
import workouts from './workoutsReducer';
import workout from './workoutReducer';

const rootReducer = combineReducers({
  exercises,
  workouts, 
  workout
});

export default rootReducer;
