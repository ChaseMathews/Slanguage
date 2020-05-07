import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Jumbotron, Card, Button, Col, Row } from 'react-bootstrap';
import "./style.css";
import UserAudio from "./userAudio";
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import API from "../../utils/API"
import ReactAudioPlayer from 'react-audio-player';
import LangCategory from "../LessonMenu/lessonLangHeader"

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;


export default function Presentation() {

    const { lang } = useParams();
    const { lesson } = useParams();

    const [presContent, setPresContent] = useState()
    let [itemIndex, setItemIndex] = useState(0);

    useEffect(() => {
        lesson === "numbers" ? loadNumPresData() : loadSlangPresData();
    }, [])


    function loadNumPresData() {
        API.getNumPresData(lang)
            .then(res => {
                setPresContent(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    function loadSlangPresData() {
        API.getSlangPresData(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    const handlePresDataChange = () => {
        setItemIndex(prev => {
            if (itemIndex < 10) {
                return prev + 1
            }
        })
    }
    const handlePresDataChangeBack = () => {
        setItemIndex(prev => {
            if (itemIndex > 0) {
                return prev - 1
            }
        })
    }

    const quizHref = "/QuizCard/" + lang + "/" + lesson;

    return (
        <>
            {presContent &&
                <Container>
                    <LangCategory />
                    <hr></hr>
                    <Jumbotron className="justify-content-center text-center">
                        <SlideDown>
                            <Row>
                                <Col>
                                    <Card className="card">
                                        <img id="numberImage" src={presContent[itemIndex].imageUrl}></img>
                                        <Card.Body className="justify-content-center text-center">
                                            <Card.Title className="word"><h2>{presContent[itemIndex].targetWord}</h2></Card.Title>
                                            <hr></hr>
                                            <ReactAudioPlayer
                                                src={presContent[itemIndex].audioToPlay}
                                                controls
                                            />
                                            <Card.Title>{presContent[itemIndex].phonetic || presContent[itemIndex].explanation}</Card.Title>
                                            <hr />
                                            <UserAudio />
                                            <hr />
                                            <Row className="justify-content-between" >
                                                <Button className="button" variant="secondary" onClick={handlePresDataChangeBack}>Go to previous</Button>
                                                {itemIndex !== 9 ?
                                                    <Button className="button" variant="success" onClick={handlePresDataChange}>Go to next</Button>
                                                    :
                                                    <Button className="button" variant="success" href={quizHref}>Practice! --></Button>
                                                }
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </SlideDown>
                    </Jumbotron>
                </Container>
            }
        </>
    );
}