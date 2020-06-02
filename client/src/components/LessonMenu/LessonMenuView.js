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
        <>
            <div className="backgroundImage" style={{
                backgroundImage:
                    `url(https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/${lang.toLowerCase()}.png
  )`, backgroundSize: "100%"
            }}>
            </div>
        <Container>
            <LangCategory />
            <hr />
            <Card.Body className="presCardBody" >
                <Card className="presCard" >
                    <h2>Slang/Profanity</h2>
                </Card>
                <SlideDown>
                    {/* <CardGradient> */}
                    <SlangCard />
                    {/* </CardGradient> */}
                </SlideDown>

                <Card className="presCard" >
                    <h2>Other Categories</h2>
                </Card>
                <SlideDown>
                    <Row>
                        <Col>
                            <LessonCards />
                        </Col>
                    </Row>
                </SlideDown>
            </Card.Body>
        </Container>
        </ >
    )
}

export default LessonMenu;
