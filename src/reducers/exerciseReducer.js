import * as types from '../actions/actionTypes';

export default function exerciseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_EXERCISE:
      return [...state,
        Object.assign({}, action.exercise)
      ];

    default:
      return state;
  }
}
