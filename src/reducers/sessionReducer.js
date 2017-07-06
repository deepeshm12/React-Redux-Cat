import initialState from './initialState';
import * as types from '../actions/actionTypes';
import {browserHistory,hashHistory} from 'react-router';

export default function sessionReducer(state = initialState.session, action) {
    debugger;
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/') 
      return !!sessionStorage.jwt
    case types.LOG_OUT:
      browserHistory.push('/login')
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}