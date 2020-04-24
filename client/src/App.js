import React from 'react';
import SignInSide from './components/UserLogin'

import './App.css';
import SignUp from './components/UserSignUp';
import Audio from './components/AudioRecording';

function App() {
  return (
    <div>
      <AppBar />
      <SignUp />
      <Audio />
    </div>
  );
}

export default App;
