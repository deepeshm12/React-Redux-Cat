import React from 'react';  
import { Route } from 'react-router';  
import Cat_1 from '../Details/Cat-1';  
import Cat_2 from '../Details/Cat-2';  
import Cat_3 from '../Details/Cat-3';


export default ( 
 
  <Route path="/cats/2" component={Cat_1}>
     <Route path="/cats/3" component= {Cat_2} />
      <Route path="/cats/4" component= {Cat_3} />
       
  </Route>

);