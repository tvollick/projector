import * as types from '../actions/actionTypes';

export default function currentWorkoutReducer(state=[], action) {
  switch(action.type) {
    case types.CREATE_WORKOUT:
      return [...state,
        Object.assign({}, action.workout)
      ];

    default:
      return state;
  }
}
