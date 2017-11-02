import * as types from '../actions/actionTypes';

export default function workoutsArchiveReducer(state=[], action) {
  switch(action.type) {
    case types.LOAD_WORKOUTS_ARCHIVE_SUCCESS:
      return action.workouts;
    default:
      return state;
  }
}
