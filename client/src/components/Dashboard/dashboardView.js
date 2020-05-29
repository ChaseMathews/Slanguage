import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap';
import API from "../../utils/API"
import NavBar from '../../components/NavBar';
import DashboardMenu from "./dashboardMenu";
import { UserContext } from '../../utils/Context';


// HomeView form submit will send existing users to their dashboard
// selectlangView will send newly registered users to their dashboard

// Need to save the languages being studied by the user to the db 
// Need to save scores to the db

// Need a dynamic menu that will either load the quizzes or presentations based on the users choice

// Need to be able to change the users language they are studying in the db
// Ask, "are you sure you want to change languages?"


// need to create methods in the API.js for...
// getUserdashboard= will get the data for the username and the language they are studying
// getUserProgress= will get last quiz score for each module the user has started



export default function Welcome() {

    const [userDashboard, setUserDashboard] = useState();
    const { lang } = useParams();
    const language = lang || currentLang

    const { user, currentLang } = useContext(UserContext);
    console.log(user);

    // const { user } = useParams();


    // useEffect(() => {
    //     userName()
    // }, [])

    // function userName() {
    //     API.findUser(user)
    //         .then(res => {
    //             console.log(res.data[0].username)
    //             setUserDashboard(res.data[0].username)
    //         })

    //         .catch(err => console.log(err));
    // };

    //     const {language} = useParams()
    //   useEffect(() => {
    //     userLanguage()
    //   }, [])

    //   function userLanguage() {
    //     API.getUserLanguage(language)
    //       .then(res => {
    //         console.log(res.data[0].) //Language they study will pe called here
    //         setQuizContent(res.data[0].questions)
    //       })

    //       .catch(err => console.log(err));
    //   };



    return (
        <Card>
                    <Col className="Greeting text-center">
                            <h1>Hello {user.username}, welcome back!</h1>
                            <h3 className="studying">You're currently studying {language}.</h3>
                            <h2>What would you like to do?</h2>
                        </Col>

        </Card>

    )
}
