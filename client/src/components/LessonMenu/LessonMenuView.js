import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LessonCards from './lessonCardDeck';
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import "./style.css"
import Gradient from "../Gradient"
const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;


function LessonMenu() {
    const { lang } = useParams();

    return (
        <Container>
            <Jumbotron className="tron">
                <Gradient />
                    <SlideDown>
                        <Row><h1>{lang}</h1></Row>
                        <Row>
                            <Col>
                                <LessonCards />
                            </Col>
                        </Row>
                    </SlideDown>
                {/* </Gradient> */}
            </Jumbotron>
        </Container>
    )
}

export default LessonMenu;
