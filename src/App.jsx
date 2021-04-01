import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './views/home/Home.jsx';
import Profile from './views/profile/Profile.jsx';
import Settings from './views/settings/Settings.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
