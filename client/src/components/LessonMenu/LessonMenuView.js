import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LessonCards from './lessonCardDeck';
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import "./style.css"
import Gradient from "../Gradient"
import LangCategory from "./lessonLangHeader"

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;


function LessonMenu() {
    // const { lang } = useParams();

    return (
        <Container>
                <Gradient>
                    <SlideDown>
                        <Row>
                            <Col>
                                <LessonCards />
                            </Col>
                        </Row>
                    </SlideDown>
                </Gradient>
        </Container>
    )
}

export default LessonMenu;
