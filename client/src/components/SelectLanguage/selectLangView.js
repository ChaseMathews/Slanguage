import React from 'react';
import { Container, Jumbotron, Row, Col, Card } from 'react-bootstrap';
import LangHeader from './selectLangHeader';
import CarouselFlags from '../Carousel'
import './style.css';


export default function SelectLang() {


    return (
        <Container>
            <Jumbotron className="display-flex grayBox1">
                <Card.Body >
                <Row className="justify-content-center">

                    <Col>
                        <LangHeader />
                        <hr></hr>
                    </Col>
                </Row>
                <Row className="justify-content-center inGrayBox">
                    <Col sm={10} md={10} lg={10}>
                        <CarouselFlags />
                    </Col>
                </Row>
                </Card.Body>
            </Jumbotron>
        </Container>
    );
}



