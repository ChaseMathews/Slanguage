import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    // console.log(lang);
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
        setItemIndex(prev => prev + 1)
    }
    const handlePresDataChangeBack = () => {
        setItemIndex(prev => prev - 1)
    }

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
                                            <Card.Title>({presContent[itemIndex].phonetic})</Card.Title>
                                            {/* <Card.Img variant="top" id="audioIcon" src="https://p7.hiclipart.com/preview/994/690/368/loudspeaker-computer-icons-sound-icon-call-icon.jpg" /> */}
                                            <hr />
                                            <UserAudio />
                                            <hr />
                                            <Row className="justify-content-between" >
                                                <Button className="button" variant="secondary" onClick={handlePresDataChangeBack}>Go to previous</Button>
                                                <Button className="button" variant="success" onClick={handlePresDataChange}>Go to next</Button>
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