import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Security from './views/Security';
const Settings = props => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${path}/account`}>Account</Route>
        <Route path={`${path}/security`}>
          <Security />
        </Route>
      </Switch>
    </div>
  );
};

export default Settings;
