import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Submit from './submitButton';
import SignInForm from './SignInForm';
import SignUpBtn from './signUpButton';
import { Link, useHistory } from 'react-router-dom';
import "./style.css"
import API from "../../utils/API";
import Image from 'react-bootstrap/Image'
import { UserContext } from '../../utils/Context';
import slideInLeft from 'react-animations/lib/slide-in-left';
import styled, { keyframes } from 'styled-components';
import slideInRight from 'react-animations/lib/slide-in-right';

const SlideRight = styled.div`animation: 2s ${keyframes`${slideInRight}`} 1`;

export default function HomeView() {

    const { setUser } = useContext(UserContext);

    const [userForm, setUserForm] = useState({
        username: "",
        password: "",
        id: ""
    });

    const [error, setError] = useState("");

    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserForm({ ...userForm, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (!userForm.username || !userForm.password) {
            return setError("Please enter a username and password.")
        } else if (userForm.username && userForm.password) {
            API.findUser(
                {
                    username: userForm.username,
                    password: userForm.password
                }
            )
                .then(userObj => {
                    console.log(userObj.data);
                    localStorage.setItem("userId", userObj.data.id);
                    setUser(userObj.data);
                    history.push("/SelectLanguage");
                })
                .catch(err => {
                    console.log(err);
                    setError("Username or password is incorrect. Try again!")
                })
        }
    }

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <Image src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/logoSlanguage.jpg" fluid />

                </Col>

                
                <Col className="form-container" md="3">
                <SlideRight>
                    <SignInForm handleFormSubmit={handleFormSubmit} user={userForm} handleInputChange={handleInputChange}>
                        {error &&
                            <span className='error'>{error}</span>
                        }
                        <br></br>
                        <Submit handleFormSubmit={handleFormSubmit} />
                    </SignInForm>
                    <br></br>
                    <Link to='/UserSignUp'><SignUpBtn /></Link>
                    </SlideRight>
                </Col>
            </Row>
        </Container>
    );
}
