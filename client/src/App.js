import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';
import SelectLang from './components/SelectLanguage/selectLangView';
import MenuContainer from './components/LessonMenu/LessonMenuView';
import Presentation from './components/Presentation/index';
import QuizCard from './components/QuizCard';
import NavBar from './components/NavBar';
import Carousel from './views/carousel'
import Gradient from './components/Gradient';
import { UserContext } from './utils/Context';


function App() {
  const location = useLocation();


  const [user, setUser] = useState();


  return (
    <>
      <UserContext.Provider value={user}>
      {location.pathname != "/" ? <NavBar /> : ""}
        <Switch>
          <Route exact path="/">
            <HomeView setUser={setUser}/>
          </Route>
          <Route exact path="/UserSignUp" component={SignUp} />
          <Route exact path="/SelectLanguage" component={SelectLang} />
          <Route path="/LessonMenu/:lang" component={MenuContainer} />
          <Route exact path="/:lang/presentation/:lesson" component={Presentation} />
          <Route exact path="/QuizCard" component={QuizCard} />
          <Route exact path="/Carousel" component={Carousel} />
        <Route exact path="/Gradient" component={Gradient} />
        </Switch>
      </UserContext.Provider>
    </>
  );
}

export default App;
