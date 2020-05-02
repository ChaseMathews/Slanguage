import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import SignUpForm from './SignUpForm';
import SignUpBtn from './SignUpBtn';
import { useHistory } from 'react-router-dom';
import './style.css';



export default function SignUp() {

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

    async function handleFormSubmit() {
        if (!userObject.username || !userObject.password) {
            return setError("Please enter a username and a password.");
        } 
        // else if (){
        //     alert that username already exists if that's the case
        // } 
        else if (userObject.password.length < 6) {
            return setError("Password must be at least 6 characters!");
        } else if (userObject.username && userObject.password) {
            await API.signUpUser({
                username: userObject.username,
                password: userObject.password,
            })
                .then(res => {
                    if(res.status !== 200){
                        setError("Username already exists.");
                    } else {
                        history.push("/SelectLanguage")
                    }
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
                    <SignUpForm userObject={userObject} handleInputChange={handleInputChange} />
                    {error &&
                        <span className='error'>{error}</span>
                    }
                    <p></p>
                    <SignUpBtn handleFormSubmit={handleFormSubmit} />
                </Col>
            </Row>
        </Container>
    );
}
