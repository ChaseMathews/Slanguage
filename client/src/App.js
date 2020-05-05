import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';
import SelectLang from './components/SelectLanguage/selectLangView'; 
import Dashboard from './components/Dashboard/dashboardView';
import ProgressPage from './components/Progress/progressView.js';
import MenuContainer from './components/LessonMenu/LessonMenuView';
import SpanishPresentation from './components/SpanishPresentation/spaPresView';
import NavajoPresentation from './components/NavajoPresentation/navajoPresView';
import QuizCard from './components/QuizCard';
import NavBar from './components/NavBar';


function App() {


// const [loginStatus, setLoginStatus] = useState(false);


  return (
    <Router>
      {window.location.pathname != "/" ? <NavBar /> : "" }
      
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/UserSignUp" component={SignUp} />
        <Route exact path="/SelectLanguage" component={SelectLang} />
        <Route exact path="/Dashboard/:user" component={Dashboard} />
        <Route exact path="/Progress" component={ProgressPage} />
        <Route path="/LessonMenu/:lang" component={MenuContainer} />
        <Route exact path="/SpanishPresentation/:lesson" component={SpanishPresentation} />
        <Route exact path="/NavajoPresentation/:lesson" component={NavajoPresentation} />
        <Route exact path="/QuizCard/:language" component={QuizCard} />
      </Switch>
    </Router>
  );
}

export default App;
