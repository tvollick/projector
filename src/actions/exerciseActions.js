import * as types from './actionTypes';
import ExerciseApi from '../api/mockExerciseApi';

export function createExercise(exercise) {
  return { type: types.CREATE_EXERCISE, exercise };
}

export function loadExercisesSuccess(exercises) {
  return { type: types.LOAD_EXERCISES_SUCCCESS, exercises}
}

export function loadExercises() {
  return function(dispatch) {
    return ExerciseApi.getAllExercises().then(exercises => {
      dispatch(loadExercisesSuccess(exercises));
    }).catch(error => {
      throw(error);
    });
  }
}
