import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function currentWorkoutReducer(state = initialState.workout , action) {
  switch(action.type) {
    case types.ADD_BLOCK_TO_WORKOUT:
      const workout = Object.assign({}, state);
      workout.blocks = [...workout.blocks, {
        repetitions: 1,
        exercises: []
      }];
      return workout;

    case types.ADD_EXERCISE_TO_BLOCK:
      if ( state.blocks[action.blockIdx] !== undefined ) {
        console.log(action.blockIdx);
        console.log(action.exercise);
        console.log(state);
        const workout = Object.assign({}, state);

        workout.blocks[action.blockIdx] = {};
        // workout.blocks[action.blockIdx]['exercises'] = [...workout.blocks[action.blockIdx].exercises, action.exercise];
        // return workout;
      }
      return state;

    default:
      return state;
  }
}
