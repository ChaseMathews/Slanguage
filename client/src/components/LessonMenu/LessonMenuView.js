import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LessonCards from './lessonCardDeck';


function LessonMenu () {
    const { lang } = useParams();

    return (
<Container>
            <Jumbotron>
                <Row><h1>{lang}</h1></Row>
                <Row>
                    <Col>
                    <LessonCards />
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    )
}

export default LessonMenu;