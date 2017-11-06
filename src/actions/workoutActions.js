import * as types from './actionTypes';

export function addBlockToWorkout() {
  return { type: types.ADD_BLOCK_TO_WORKOUT };
}
export function addExerciseToBlock(exercise, blockIdx) {
  return { type: types.ADD_EXERCISE_TO_BLOCK, exercise, blockIdx };
}
