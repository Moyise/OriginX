import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Orders from './pages/Orders';
import Campaigns from './pages/Campaigns';
import TeamTabs from './pages/TeamTabs';
import TeamTiles from './pages/TeamTiles';
import Messages from './pages/Messages';
import Tasks from './pages/Tasks';
import Applications from './pages/Applications';
import Settings from './pages/Settings';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/customers">
          <Customers />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/campaigns">
          <Campaigns />
        </Route>
        <Route exact path="/team-tabs">
          <TeamTabs />
        </Route>
        <Route exact path="/team-tiles">
          <TeamTiles />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path="/tasks">
          <Tasks />
        </Route>
        <Route exact path="/applications">
          <Applications />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
      </Switch>
    </>
  );
}

export default App;
