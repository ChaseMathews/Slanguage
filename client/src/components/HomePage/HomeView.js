import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Submit from './submitButton';
import Image from './image';
import SignInForm from './SignInForm';
import SignUpBtn from './signUpButton';
import { Link } from 'react-router-dom';
import CarouselFlags from '../Carousel'
import "./style.css"
import RingLoader from 'react-spinners/RingLoader'

export default function HomeView() {

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col className="spinner" md={{ size: 6, offset: 2 }} >
                    {/* <Image /> */}
                    {/* <CarouselFlags /> */}
                    <RingLoader loading={true} size={350} color= "#39a6c1" />
                        
                </Col>

                <Col className="form-container" md="4">
                    <SignInForm />
                    <Link to='/SelectLanguage'><Submit /></Link>
                    <br></br>
                    <Link to='/UserSignUp'><SignUpBtn /></Link>

                </Col>

            </Row>
        </Container>
    );
}
