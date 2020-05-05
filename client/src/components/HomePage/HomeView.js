import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Submit from './submitButton';
import SignInForm from './SignInForm';
import SignUpBtn from './signUpButton';
import { Link, useParams, useHistory } from 'react-router-dom';
import "./style.css"
import RingLoader from 'react-spinners/RingLoader'
import API from "../../utils/API";

export default function HomeView({setUser}) {

    // check Detail page in 21MERN ACT 05

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
                    // loadUserData();
                    history.push("/SelectLanguage");
                })
                .catch(err => {
                    console.log({ err });
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



    // const { id } = useParams()

    // useEffect(() => {
    //     API.getUserData(id)
    //         .then(res => {
    //             console.log(res.data);
    //             setUser(res.data)
    //         })
    //         .catch(err => console.log(err));
    // }, [])

    // API.findUser


    // send user info to backend and send username and id back to frontend (findOne)
    // set user id to the url??
    // router.route("/login")
    //     .post(userController.findOne)

    // load user data based on id in params

    // function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.title && formObject.author) {
    //         API.findUser({
    //             title: formObject.title,
    //             author: formObject.author,
    //             synopsis: formObject.synopsis
    //         })
    //             .then(res => loadBooks())
    //             .catch(err => console.log(err));
    //     }
    // };


    return (
        <Container>
            <hr></hr>
            <Row>
                <Col className="spinner" md={{ size: 6, offset: 2 }} >
                    <RingLoader loading={true} size={350} color="#39a6c1" />

                </Col>

                <Col className="form-container" md="4">
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
