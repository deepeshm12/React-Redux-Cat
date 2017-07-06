import React from 'react';  
import { Route, Router,hashHistory,IndexRoute } from 'react-router';  
import App from './App';  
import HomePage from './Components/HomePage';  
import CatsPage from './Components/CatsPage';  
import CatPage from './Components/CatPage';
import LogInPage from './Components/LogInPage';
import Dashboard from './Components/Dashboard';
import auth from './auth/authenticator';

export default ( 
<Router>
 <Route path="/login" component={LogInPage} />
  <Route path="/" component={App} onEnter={requireAuth}>
    <IndexRoute component={HomePage} />
        <Route path="/cats" component= {CatsPage} >
          <Route path="/cats/:id" component={CatPage} />
        </Route>
      <Route path="/about" component ={Dashboard } /> 
  </Route>
</Router>
);
function requireAuth(nextState, replace) {
  debugger;
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}