import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Security = props => {
  let { path } = useRouteMatch();
  console.log('security', { path });
  return (
    <Switch>
      <Route path={`${path}/credentials`}>Credentials</Route>
      <Route path={`${path}/2fa`}>Two factor authentication</Route>
    </Switch>
  );
};

export default Security;
