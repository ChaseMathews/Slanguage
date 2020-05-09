import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LessonCards from './lessonCardDeck';
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import "./style.css";
import GradientBorder from '../CardGradient';
import LangCategory from "./lessonLangHeader";
import SlangCard from "./lessonCardSlang";

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;


function LessonMenu() {
    const { lang } = useParams();
    console.log(lang);

    return (
        <Container>
            <>
                <LangCategory />
            </>
            <hr />
            <GradientBorder>
                <SlideDown>
                    <Row>
                        <Col>
                            <SlangCard />
                        </Col>
                    </Row>
                </SlideDown>
            </GradientBorder>
            <SlideDown>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <LessonCards />
                    </Col>
                </Row>
            </SlideDown>
        </Container>
    )
}

export default LessonMenu;
