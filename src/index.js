import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import configureStore from './Store/configureStore';  
import { Provider } from 'react-redux';  
import { Router, browserHistory, Route } from 'react-router';
import {loadCats} from './actions/catActions';

const store = configureStore();
store.dispatch(loadCats());
console.log(store.getState());

ReactDOM.render( <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root'));

