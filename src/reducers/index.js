import {combineReducers} from 'redux';
import exercises from './exerciseReducer';

const rootReducer = combineReducers({
  exercises
});

export default rootReducer; 
