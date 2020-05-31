import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import LessonCards from './lessonCardDeck';
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import "./style.css";
import CardGradient from '../CardGradient';
import LangCategory from "./lessonLangHeader";
import SlangCard from "./lessonCardSlang";

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;


function LessonMenu() {
    const { lang } = useParams();
    // console.log(lang);

    return (
        <Container>
                <LangCategory />
            <hr />

                    <SlideDown>
                        {/* <CardGradient> */}
                            <SlangCard />
                        {/* </CardGradient> */}
                    </SlideDown>

            <hr />
            <SlideDown>
                <Row>
                    <Col>
                        <LessonCards />
                    </Col>
                </Row>
            </SlideDown>
        </Container>
    )
}

export default LessonMenu;
