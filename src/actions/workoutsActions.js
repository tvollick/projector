import * as types from './actionTypes';
import workoutsApi from '../api/mockWorkoutsApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadworkoutsSuccess(workouts) {
  return { type: types.LOAD_WORKOUTS_ARCHIVE_SUCCESS, workouts}
}

export function loadworkouts() {
  return function(dispatch) {
    dispatch(beginAjaxCall()); 
    return workoutsApi.getAllWorkouts().then(workouts => {
      dispatch(loadworkoutsSuccess(workouts));
    }).catch(error => {
      throw(error);
    });
  }
}
