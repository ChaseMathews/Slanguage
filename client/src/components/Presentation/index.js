import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Jumbotron, Card, Button, Col, Row } from 'react-bootstrap';
import "./style.css";
import UserAudio from "./userAudio";
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import API from "../../utils/API"
import ReactAudioPlayer from 'react-audio-player';
import LangCategory from "../LessonMenu/lessonLangHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import CardGradient from '../CardGradient'

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;


export default function Presentation() {

    const { lang } = useParams();
    const { lesson } = useParams();
    const history = useHistory();

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

    const goToQuiz = () => {
        history.push(`/QuizCard/${lang}/${lesson}`);
    }

    return (
        <>
            {presContent &&
                <Container>
                    <LangCategory />
                    <hr></hr>
                    <Jumbotron className="justify-content-center text-center">
                        <Button className="previousback" onClick={handlePresDataChangeBack}> < FontAwesomeIcon icon={faAngleDoubleLeft} size="6x" /> </Button>

                        <SlideDown>
                            <Row>
                                <Col>
                                    <CardGradient>
                                        <Card>
                                            <Card.Img className="numberImage" variant="top" src={presContent[itemIndex].imageUrl} />

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
                                                    {itemIndex > 0 &&
                                                        <Button className="button" variant="secondary" onClick={handlePresDataChangeBack}>Go to previous</Button>
                                                    }
                                                    {itemIndex !== 9 ?
                                                        <Button className="button" variant="success" onClick={handlePresDataChange}>Go to next</Button>
                                                        :
                                                        <Button className="button" variant="success" onClick={goToQuiz}>Practice! --></Button>
                                                    }
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </CardGradient>
                                </Col>
                            </Row>
                        </SlideDown>
                        <Button className="previousback" onClick={handlePresDataChange}>< FontAwesomeIcon icon={faAngleDoubleRight} size="6x" /> </Button>

                    </Jumbotron>
                </Container>
            }
        </>
    );
}