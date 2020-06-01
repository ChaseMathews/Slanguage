import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap';
import API from "../../utils/API"
import NavBar from '../../components/NavBar';
import DashboardMenu from "./dashboardMenu";
import { UserContext } from '../../utils/Context';

export default function Welcome() {

    const { lang } = useParams();
    const language = lang || currentLang

    const { user, setUser, currentLang } = useContext(UserContext);
    console.log(user);



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
