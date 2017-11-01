import * as types from './actionTypes';
// action creator
export function createExercise(exercise) {
  return { type: types.CREATE_EXERCISE, exercise };
}
