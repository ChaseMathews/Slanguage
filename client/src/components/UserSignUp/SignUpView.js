import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import SignUpForm from './SignUpForm';
import SignUpBtn from './SignUpBtn';
import { Link, useHistory } from 'react-router-dom';



export default function SignUp() {

    const [userObject, setUserObject] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserObject({ ...userObject, [name]: value })
    };

    function handleFormSubmit() {
        if (userObject.username && userObject.password) {
            API.signUpUser({
                username: userObject.username,
                password: userObject.password,
            })
                .then(res => {
                    history.push("/SelectLanguage")
                })
                .catch(err => console.log(err));
        }
    }


        return (
            <Container>
                <hr></hr>
                <Row>
                    <Col md={{ span: 8 }}>
                        <h1>Image goes here</h1>
                    </Col>
                    <Col md={{ span: 4, offset: 8 }}>
                        <SignUpForm userObject={userObject} handleInputChange={handleInputChange}/>
                        <SignUpBtn handleFormSubmit={handleFormSubmit}/>
                    </Col>
                </Row>
            </Container>
        );
    }
