import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Card, Button, Col, Row} from 'react-bootstrap';
// import SpaPresQuizBtn from './spaPresQuizBtn';
import "./style.css";
import UserAudio from "./userAudio";
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
// import PlayAudio from "./playAudio";
import API from "../../utils/API"
import ReactAudioPlayer from 'react-audio-player';

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;
export default function SpanishPresentation() {

    const [presContent, setPresContent] = useState()
    let [index, setIndex] = useState(0);

    useEffect(() => {
        loadPresData()
    }, [])

    function loadPresData() {
        API.getPresData()
            .then(res => {
                setPresContent(res.data[0].content)
                console.log(res.data[0].content)
            })

            .catch(err => console.log(err));
    };

    const handlePresDataChange = () => {
        setIndex(prev => prev + 1)
    }
    const handlePresDataChangeBack = () => {
        setIndex(prev => prev - 1)
    }

    return (
        <>
            {presContent &&
                <Container>
                    <hr></hr>
                    <Jumbotron>
                        <SlideDown>
                            <Row>
                                <Col md="6">
                                    <Card className="cardHolder">
                                        <img id="numberImage" src={presContent[index].imageUrl}></img>
                                        <Card.Body>
                                            <Card.Title>{presContent[index].targetWord}</Card.Title>
                                            <ReactAudioPlayer
                                                src={presContent[index].audioToPlay}
                                                controls
                                            />
                                            <Card.Title>({presContent[index].phonetic})</Card.Title>
                                            {/* <Card.Img variant="top" id="audioIcon" src="https://p7.hiclipart.com/preview/994/690/368/loudspeaker-computer-icons-sound-icon-call-icon.jpg" /> */}
                                            <UserAudio />
                                            <Row className="justify-content-between" >
                                            <Button className="button" variant="primary" onClick={handlePresDataChangeBack}>Go to previous</Button>
                                            <Button className="button" variant="primary" onClick={handlePresDataChange}>Go to next</Button>
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