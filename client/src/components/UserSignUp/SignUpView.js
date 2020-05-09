import React, { useState, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import SignUpForm from './SignUpForm';
import SignUpBtn from './SignUpBtn';
import { useHistory } from 'react-router-dom';
import './style.css';
import RingLoader from 'react-spinners/RingLoader'
import Polaroid from '../Polaroid'
import RingLoader from 'react-spinners/RingLoader';
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

    async function handleFormSubmit() {

        setError(() => {
            if (!userObject.username || !userObject.password) {
                return "Please enter both a username and a password."
            } else if (userObject.password.length < 6) {
                return "Password must be at least 6 characters!"
            }
        });

        if (userObject.username && userObject.password && userObject.password.length >= 6) {
            await API.signUpUser({
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
    <Container>
        <hr></hr>
        <Row>
        <Col className="spinner" md={{ size: 6, offset: 2 }} >
                    {/* <RingLoader loading={true} size={350} color="#39a6c1" /> */}
                    <Polaroid />


                </Col>
                <Col md="4">
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
