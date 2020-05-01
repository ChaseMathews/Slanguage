import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Submit from './submitButton';
import Image from './image';
import SignInForm from './SignInForm';
import SignUpBtn from './signUpButton';
import { Link } from 'react-router-dom';
import API from "../../utils/API";

export default function HomeView() {

// check Detail page in 21MERN ACT 05

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col className="image-container" md={{ span: 8 }}>
                    <Image />
                </Col>
                 
                    <Col className="form-container" md={{ span: 4, offset: 8 }}>
                        <SignInForm />
                        <Link to='/SelectLanguage'><Submit /></Link>
                        <br></br>
                        <Link to='/UserSignUp'><SignUpBtn /></Link>

                    </Col>
                
            </Row>
        </Container>
    );
}
