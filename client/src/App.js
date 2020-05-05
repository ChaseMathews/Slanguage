import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';
import SelectLang from './components/SelectLanguage/selectLangView';
import MenuContainer from './components/LessonMenu/LessonMenuView';
import Presentation from './components/Presentation/index';
import QuizCard from './components/QuizCard';
import NavBar from './components/NavBar';
import { UserContext } from './utils/Context';


function App() {


  const [user, setUser] = useState();


  return (
    <Router>
      <UserContext.Provider value={user}>
        {window.location.pathname != "/" ? <NavBar /> : ""}
        <Switch>
          <Route exact path="/">
            <HomeView setUser={setUser}/>
          </Route>
          <Route exact path="/UserSignUp" component={SignUp} />
          <Route exact path="/SelectLanguage" component={SelectLang} />
          <Route path="/LessonMenu/:lang" component={MenuContainer} />
          <Route exact path="/:lang/presentation/:lesson" component={Presentation} />
          <Route exact path="/QuizCard" component={QuizCard} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
