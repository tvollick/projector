import * as types from '../actions/actionTypes';

export default function exerciseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_EXERCISE:
      return [...state,
        Object.assign({}, action.exercise)
      ];
    case types.LOAD_EXERCISES_SUCCCESS:
      return action.exercises; 
    default:
      return state;
  }
}
