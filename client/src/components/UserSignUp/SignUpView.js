import React, { useState, useContext } from 'react';
import { Row, Col, Jumbotron, Card } from 'react-bootstrap';
import API from "../../utils/API";
import SignUpForm from './SignUpForm';
import SignUpBtn from './SignUpBtn';
import { useHistory } from 'react-router-dom';
import './style.css';
import Image from 'react-bootstrap/Image'
import { UserContext } from '../../utils/Context';


export default function SignUp() {

    const { setUser } = useContext(UserContext);

    const [userObject, setUserObject] = useState({
        username: "",
        password: ""
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
            }
        });

        if (userObject.username && userObject.password && userObject.password.length >= 6) {
            API.signUpUser({
                username: userObject.username,
                password: userObject.password,
            })
                .then(res => {
                    console.log(res.data);
                    API.findUser(
                        {
                            username: userObject.username,
                            password: userObject.password
                        }
                    )
                        .then(userObj => {
                            console.log(userObj.data);
                            setUser(userObj.data);
                            history.push("/SelectLanguage");
                        })
                })
                .catch(err => {
                    console.error(err);
                    setError("Username already exists.")
                });
        }
    }


return (
    <Jumbotron>
        
        <hr></hr>
        <Card.Body>
        <Row>
        <Card>
        <Col md={{ size: 10, offset: 1 }} >
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
        </Jumbotron>
    );
}
