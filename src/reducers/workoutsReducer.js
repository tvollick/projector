import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function workoutsReducer(state = initialState.workouts, action) {
  switch(action.type) {
    case types.LOAD_WORKOUTS_ARCHIVE_SUCCESS:
      return action.workouts;
    case types.CREATE_WORKOUT_SUCCESS:
      return [
        ...state, Object.assign({}, action.workout)
      ]; 

    default:
      return state;
  }
}
