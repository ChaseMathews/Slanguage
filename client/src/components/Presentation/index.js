import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Jumbotron, Card, Button, Col, Row } from 'react-bootstrap';
import "./style.css";
import UserAudio from "./userAudio";
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import API from "../../utils/API"
import ReactAudioPlayer from 'react-audio-player';

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
        setItemIndex(prev => prev + 1)
    }
    const handlePresDataChangeBack = () => {
        setItemIndex(prev => prev - 1)
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
                                        <img id="numberImage" src={presContent[itemIndex].imageUrl}></img>
                                        <Card.Body>
                                            <Card.Title>{presContent[itemIndex].targetWord}</Card.Title>
                                            <ReactAudioPlayer
                                                src={presContent[itemIndex].audioToPlay}
                                                controls
                                            />
                                            <Card.Title>({presContent[itemIndex].phonetic})</Card.Title>
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