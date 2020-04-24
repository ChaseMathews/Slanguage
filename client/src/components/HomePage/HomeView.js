import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Submit from './submitButton';
import Image from './image';
import SignInForm from './SignInForm';
import SignUpBtn from './signUpButton';
import { Link } from 'react-router-dom';

export default function HomeView() {

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col className="image-container" md={{ span: 8 }}>
                    <Image />
                </Col>
                <Col className="form-container" md={{ span: 4, offset: 8 }}>
                    <SignInForm />
                    <Submit />
                    <br></br>
                    <Link to='/UserSignUp'><SignUpBtn /></Link>
                </Col>
            </Row>
        </Container>
    );
}
