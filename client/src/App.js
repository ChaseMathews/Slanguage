import React from 'react';

import './App.css';


import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/UserSignUp" component={SignUp} />
        <Route exact path="/SelectLanguage" component={} />

      </Switch>
    </Router>
  );
}

export default App;
