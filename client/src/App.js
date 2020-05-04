import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';
import SelectLang from './components/SelectLanguage/selectLangView'; 
import MenuContainer from './components/LessonMenu/LessonMenuView';
import SpanishPresentation from './components/SpanishPresentation/spaPresView';
import NavajoPresentation from './components/NavajoPresentation/navajoPresView';
import QuizCard from './components/QuizCard';
import NavBar from './components/NavBar';
import Carousel from './views/carousel'
import Gradient from './components/Gradient';

function App() {


// const [loginStatus, setLoginStatus] = useState(false);


  return (
    <Router>
      {window.location.pathname != "/" ? <NavBar /> : "" }
      
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/UserSignUp" component={SignUp} />
        <Route exact path="/SelectLanguage" component={SelectLang} />
        <Route path="/LessonMenu/:lang" component={MenuContainer} />
        <Route exact path="/SpanishPresentation/:lesson" component={SpanishPresentation} />
        <Route exact path="/NavajoPresentation/:lesson" component={NavajoPresentation} />
        <Route exact path="/QuizCard" component={QuizCard} />
        <Route exact path="/Carousel" component={Carousel} />
        <Route exact path="/Gradient" component={Gradient} />
      </Switch>
    </Router>
  );
}

export default App;
