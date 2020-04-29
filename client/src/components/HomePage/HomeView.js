import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Submit from './submitButton';
import Image from './image';
import SignInForm from './SignInForm';
import SignUpBtn from './signUpButton';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import "./style.css"

export default function HomeView() {

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col md="8">
                    {/* <Image /> */}
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://imgc.allpostersimages.com/img/print/u-g-PQR7U00.jpg?w=550&h=550&p=0"
                                alt="Mexico flag"
                            />
                            <Carousel.Caption className="carouselText">
                                <h3>Español</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/flag-of-navajo-nation-world-art-prints-and-designs.jpg"
                                alt="Navajo Nation flag"
                            />

                            <Carousel.Caption className="carouselText">
                                <h3>Diné</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/67/fe/a7/67fea724434b5d8a1afea597e31cb467.jpg"
                                alt="Italy flag"
                            />

                            <Carousel.Caption className="carouselText">
                                <h3>Italiano</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.germanpulse.com/wp-content/uploads/2011/07/german-flag.jpg"
                                alt="German flag"
                            />
                            <Carousel.Caption className="carouselText">
                                <h3>Deutsch</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://hdwallpaperim.com/wp-content/uploads/2017/08/27/141093-France-flag-French-748x468.jpg"
                                alt="French"
                            />
                            <Carousel.Caption className="carouselText">
                                <h3>Français</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
