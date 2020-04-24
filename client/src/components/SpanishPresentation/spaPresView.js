import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import SpaPresQuizBtn from './spaPresQuizBtn';


export default function SpanishPresentation() {

    return (
        <Container>
            <hr></hr>
            <Jumbotron>
                <Row>
                    <Col>
                        <SpaPresQuizBtn />
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
}