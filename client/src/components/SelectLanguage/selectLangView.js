import React from 'react';
import { Container, Jumbotron, Row, Col, Card } from 'react-bootstrap';
import LangHeader from './selectLangHeader';
import CarouselFlags from '../Carousel'



export default function SelectLang() {


    return (
        <Container>
            <Jumbotron>
                <Card.Body>
                <Row className="justify-content-center">

                    <Col>
                        <LangHeader />
                        <hr></hr>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={7} md={7} lg={7}>
                        <CarouselFlags />
                    </Col>
                </Row>
                </Card.Body>
            </Jumbotron>
        </Container>
    );
}



