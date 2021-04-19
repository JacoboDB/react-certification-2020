import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import VideoProvider from '../../state/VideoProvider';

import Navbar from '../Navbar';
import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail';

function App() {
  return (
    <VideoProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/video/:video">
              <VideoDetail />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </VideoProvider>
  );
}

export default App;
