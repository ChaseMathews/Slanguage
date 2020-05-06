import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Submit from './submitButton';
import SignInForm from './SignInForm';
import SignUpBtn from './signUpButton';
import { Link, useParams, useHistory } from 'react-router-dom';
import "./style.css"
import RingLoader from 'react-spinners/RingLoader'
import API from "../../utils/API";
import Image from 'react-bootstrap/Image'
import { UserContext } from '../../utils/Context';

export default function HomeView() {

    const { user, setUser } = useContext(UserContext);

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
                    setUser(userObj.data);
                    history.push("/SelectLanguage");
                })
                .catch(err => {
                    console.log(err);
                    setError(err.response.data.message)
                })
        }
    }


    function loadUserData() {
        API.getUserData()
            .then(res => {
                console.log()
                setUserForm(res.data[0].content)
                console.log(res.data[0].content)
            })

            .catch(err => console.log(err));
    };



    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    {/* <RingLoader loading={true} size={350} color="#39a6c1" /> */}
                    <Image src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/logoSlanguage.jpg" fluid />

                </Col>

                <Col className="form-container" md="3">
                    <SignInForm handleFormSubmit={handleFormSubmit} user={userForm} handleInputChange={handleInputChange}>
                        {error &&
                            <span className='error'>{error}</span>
                        }
                        <br></br>
                        <Submit handleFormSubmit={handleFormSubmit} />
                    </SignInForm>
                    <br></br>
                    <Link to='/UserSignUp'><SignUpBtn /></Link>

                </Col>

            </Row>
        </Container>
    );
}
