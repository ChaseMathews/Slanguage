import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import NavajoPresQuizBtn from './navaPresQuizBtn';


export default function NavajoPresentation() {

    return (
        <Container>
            <hr></hr>
            <Jumbotron>
                <Row>
                    <Col>
                        <NavajoPresQuizBtn />
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}