import * as types from './actionTypes';
import workoutsApi from '../api/mockWorkoutsApi';

export function loadworkoutsSuccess(workouts) {
  return { type: types.LOAD_WORKOUTS_ARCHIVE_SUCCESS, workouts}
}

export function loadworkouts() {
  return function(dispatch) {
    return workoutsApi.getAllWorkouts().then(workouts => {
      dispatch(loadworkoutsSuccess(workouts));
    }).catch(error => {
      throw(error);
    });
  }
}

export function createWorkoutSuccess(workout) {
  return { type: types.CREATE_WORKOUT_SUCCESS, workout};
}

export function updateWorkoutSuccess(workout) {
  return { type: types.UPDATE_WORKOUT_SUCCESS, workout};
}

export function saveWorkout(workout) {
  return function(dispatch, getState) {
    return workoutsApi.saveWorkout(workout).then(savedWorkout => {
      workout.id ? dispatch(updateWorkoutSuccess(savedWorkout)) : dispatch(createWorkoutSuccess(savedWorkout));
    }).catch(error => {
      throw(error);
    });
  }
}
