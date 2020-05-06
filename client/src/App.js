import React, { useContext, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import './App.css';
import HomeView from './components/HomePage/HomeView';
import SignUp from './components/UserSignUp/SignUpView';
import SelectLang from './components/SelectLanguage/selectLangView';
import Dashboard from './components/Dashboard/dashboardView';
import ProgressPage from './components/Progress/progressView.js';
import MenuContainer from './components/LessonMenu/LessonMenuView';
import Presentation from './components/Presentation/index';
import QuizCard from './components/QuizCard';
import NavBar from './components/NavBar';
import Carousel from './views/carousel'
import Gradient from './components/Gradient';
import UserProvider, { UserContext } from './utils/Context';

function App() {
  const location = useLocation();

  const { user } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    if (location.pathname !== "/" && user === undefined) {
      history.push("/")
    }
  }, [user])

  return (
    <>
      {console.log(user)};
      <UserProvider>
        {location.pathname != "/" ? <NavBar /> : ""}
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/UserSignUp" component={SignUp} />
          <Route exact path="/SelectLanguage" component={SelectLang} />
          <Route exact path="/Dashboard/:user" component={Dashboard} />
          <Route exact path="/Progress" component={ProgressPage} />
          <Route path="/LessonMenu/:lang" component={MenuContainer} />
          <Route exact path="/:lang/presentation/:lesson" component={Presentation} />
          <Route exact path="/QuizCard/:language" component={QuizCard} />
          <Route exact path="/Carousel" component={Carousel} />
          <Route exact path="/Gradient" component={Gradient} />
        </Switch>
      </UserProvider>
    </>
  );
}

export default App;
