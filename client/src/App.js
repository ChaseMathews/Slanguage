import React from 'react';
import SignInSide from './components/UserLogin'

import './App.css';
import SignUp from './components/UserSignUp';

function App() {
  return (
    <div>
      <AppBar />
      <SignUp />
    </div>
  );
}

export default App;
