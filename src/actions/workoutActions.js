import * as types from './actionTypes';
import workoutsApi from '../api/mockWorkoutsApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function addBlockToWorkout() {
  return { type: types.ADD_BLOCK_TO_WORKOUT };
}
export function addExerciseToBlock(exercise, blockIdx) {
  return { type: types.ADD_EXERCISE_TO_BLOCK, exercise, blockIdx };
}

export function createWorkoutSuccess(workout) {
  return { type: types.CREATE_WORKOUT_SUCCESS, workout};
}

export function updateWorkoutSuccess(workout) {
  return { type: types.UPDATE_WORKOUT_SUCCESS, workout};
}

export function saveWorkout(workout) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return workoutsApi.saveWorkout(workout).then(savedWorkout => {
      workout.id ? dispatch(updateWorkoutSuccess(savedWorkout)) : dispatch(createWorkoutSuccess(savedWorkout));
    }).catch(error => {
      dispatch(ajaxCallsError(error));
      throw(error);
    });
  }
}
