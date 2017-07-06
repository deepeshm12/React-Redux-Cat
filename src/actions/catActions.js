import catApi from '../api/catApi';
import axios from 'axios';
import * as types from './actionTypes';


export function loadCatsSuccess(cats) {
  return {type: types.LOAD_CATS_SUCCESS, cats};
}
export function loadCats() {  
  debugger;
  return function(dispatch) {
  axios.get(`http://localhost:3001/users/getCats`).then(res => {
      const response = res.data;
       dispatch(loadCatsSuccess(response))
        console.log(response);
    })
//    return catApi.getAllCats().then(cats => {
//    dispatch(loadCatsSuccess(cats));
//})
    .catch(error => {
      throw(error);
    });
  };
}
