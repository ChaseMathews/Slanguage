import React, { useState, useContext } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import API from "../../utils/API";
import SignUpForm from './SignUpForm';
import SignUpBtn from './SignUpBtn';
import { useHistory } from 'react-router-dom';
import './style.css';
import Image from 'react-bootstrap/Image'
import { UserContext } from '../../utils/Context';


export default function SignUp() {

    const { setUser, setMessage } = useContext(UserContext);

    const [userObject, setUserObject] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState("");

    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserObject({ ...userObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        setError(() => {
            if (!userObject.username || !userObject.password) {
                return "Please enter both a username and a password."
            } else if (userObject.password.length < 6) {
                return "Password must be at least 6 characters!"
            } else if (userObject.password !== userObject.confirmPassword) {
                return ("Passwords don't match!")
            }
        });

        if (userObject.username && userObject.password && userObject.password.length >= 6 && userObject.password === userObject.confirmPassword) {
            API.signUpUser({
                username: userObject.username,
                password: userObject.password,
            })
                .then(res => {
                    setUser(res.data);
                    setMessage("You've made an account! Sign in to get started.")
                    history.push("/");
                })
                .catch(err => {
                    console.error(err);
                    setError("Username already exists.")
                });
        }
    }


    return (
        <Container>
            <Card.Body>
                <Row>
                    <Card className="signupPage">
                        <Col md={{ size: 8 }} >
                            <Image src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/slanguagelogoFinal-02.png" fluid />
                        </Col>
                    </Card>
                    <Col md="3">
                        <SignUpForm handleFormSubmit={handleFormSubmit} userObject={userObject} handleInputChange={handleInputChange}>
                            {error &&
                                <span className='error'>{error}</span>
                            }
                            <br></br>
                            <SignUpBtn handleFormSubmit={handleFormSubmit} />
                        </SignUpForm>
                    </Col>

                </Row>
            </Card.Body>
        </Container>
    );
}
