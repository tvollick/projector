import * as types from './actionTypes';
import WorkoutsArchiveApi from '../api/mockWorkoutsArchiveApi';

export function loadWorkoutsArchiveSuccess(workouts) {
  return { type: types.LOAD_WORKOUTS_ARCHIVE_SUCCESS, workouts}
}

export function loadWorkoutsArchive() {
  return function(dispatch) {
    return WorkoutsArchiveApi.getAllWorkouts().then(workouts => {
      dispatch(loadWorkoutsArchiveSuccess(workouts));
    }).catch(error => {
      throw(error);
    });
  }
}
