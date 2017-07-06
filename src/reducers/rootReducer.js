import { combineReducers } from 'redux';
import cats from './catReducers';
import session from './sessionReducer';
import loginError from './loginReducer';


const rootReducer = combineReducers({  
  // short hand property names
  cats,
  session,
  loginError
})

export default rootReducer; 