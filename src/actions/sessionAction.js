import * as types from './actionTypes';
import sessionApi from '../api/SessionApi';
import auth from '../auth/authenticator';


export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginFaliure(loginError) {
  return {  
    type: types.LOG_IN_FALIURE,
    loginError
  }
}
function LoginPending(LoginPending) {
  return {
    type: types.LOG_IN_PENDING,
    LoginPending
  };
}

export function loginUser(credentials) {
  return function(dispatch) {

     sessionApi.login(credentials).then(response => {
      dispatch(LoginPending(false));
      if(response.jwt =='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxfQ.SCTAwhurhXSTwlhf_iZFYxeAUw7efnO_vdoTF4D0XVo'){
      debugger;
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
      }
      else{
         dispatch(loginFaliure(response.jwt));
      } 
    }).catch(error => {
       dispatch(loginFaliure());
      throw(error);
    });
  };
}

export function logOutUser() {
  auth.logOut();
  return {type: types.LOG_OUT}
}