import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function catReducer(state = initialState.cats, action) {  
  debugger;
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
     return action.cats
    default: 
      return state;
  }
}