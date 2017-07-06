import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {browserHistory,hashHistory} from 'react-router';


export default function loginReducer(state = initialState.loginError, action) {
    debugger;
  switch(action.type) {
      case types.LOG_IN_FALIURE:
      browserHistory.push('/login') 
      return Object.assign({}, state, {
          loginError: action.loginError
        });
    default: 
      return state;
  }
} 