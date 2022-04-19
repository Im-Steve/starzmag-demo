import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import Interview from './pages/Interview/Interview';
import Login from './pages/Login/Login';

const Routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/interview/eliseald"><Interview /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/summary"><Home magIsOpen /></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
