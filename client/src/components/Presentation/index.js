import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Jumbotron, Card, Button, Col, Row, ListGroup, ListGroupItem, Modal, Image } from 'react-bootstrap';
import "./style.css";
import UserAudio from "./userAudio";
import { slideInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import API from "../../utils/API"
import ReactAudioPlayer from 'react-audio-player';
import LangCategory from "../LessonMenu/lessonLangHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import CardGradient from '../CardGradient';
import { UserContext } from '../../utils/Context';

const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;


export default function Presentation() {

    const { lang } = useParams();
    const { lesson } = useParams();
    const history = useHistory();
    const { setCurrentLang, setComeFromPres, ageModal, setAgeModal } = useContext(UserContext);
    const [presContent, setPresContent] = useState();
    let [itemIndex, setItemIndex] = useState(0);

    useEffect(() => {
        setCurrentLang(lang);
        switch (lesson) {
            case 'numbers': loadNumPresData();
                break;
            case 'slang': loadSlangPresData();
                break;
            case 'body1': loadBodyPres1Data();
                break;
            case 'body2': loadBodyPres2Data();
                break;
            case 'body3': loadBodyPres3Data();
                break;
            case 'body4': loadBodyPres4Data();
                break;
            case 'calendar': loadCalendarPresData();
                break;
            case 'colors': loadColorsPresData();
                break;
            case 'days': loadDaysPresData();
                break;
            case 'profanity': loadProfanityPresData();
                break;
            case 'seasons': loadSeasonsPresData();
                break;
            case 'travel1': loadTravelPres1Data();
                break;
            case 'travel2': loadTravelPres2Data();
                break;
            case 'travel3': loadTravelPres3Data();
                break;
            default: console.log("IDK")
        }
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

    function loadBodyPres1Data() {
        API.getBodyPres1Data(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    function loadBodyPres2Data() {
        API.getBodyPres2Data(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    function loadBodyPres3Data() {
        API.getBodyPres3Data(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };

    function loadBodyPres4Data() {
        API.getBodyPres4Data(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadCalendarPresData() {
        API.getCalendarPresData(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadColorsPresData() {
        API.getColorsPresData(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadDaysPresData() {
        API.getDaysPresData(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadProfanityPresData() {
        setAgeModal(true);
        API.getProfanityPresData(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadSeasonsPresData() {
        API.getSeasonsPresData(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadTravelPres1Data() {
        API.getTravelPres1Data(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadTravelPres2Data() {
        API.getTravelPres2Data(lang)
            .then(res => {
                setPresContent(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
    };
    function loadTravelPres3Data() {
        API.getTravelPres3Data(lang)
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
        setComeFromPres(true);
        setAgeModal(false);
    }

    const goBackToLessons = () => {
        history.push(`/LessonMenu/pres/${lang}`);
        setAgeModal(false);
    }

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        setAgeModal(false);
    };

    return (
        <>
            {ageModal &&
                <Modal show={show} onHide={handleClose} backdrop="static" center styles={{ overlay: { background: "#B3F1F8" } }}>
                    <Modal.Header>
                        <Modal.Body>
                            <p id="modalBody4"><strong>WARNING:</strong></p>
                            <p className="modalBody5">Your grandma would not approve of the following content due to explicit language.</p>
                            <p className="modalBody5">Do you want to continue?</p>
                        </Modal.Body>
                    </Modal.Header>
                    <Image src="https://us.123rf.com/450wm/sevalv/sevalv1811/sevalv181100416/114143404-displeased-angry-elderly-mother-with-grey-hair-looking-from-under-forehead-with-irritated-expression.jpg?ver=6" styles={{ height: "50px" }} fluid />
                    <Modal.Footer>
                        <Button variant="primary" onClick={goBackToLessons}><strong>Go Back</strong></Button>
                        <Button variant="danger" onClick={() => setAgeModal(false)}><strong>Continue</strong></Button>
                    </Modal.Footer>
                </Modal>
            }
            {presContent &&
                <Container>
                    <Row>
                        <Col xs={{ span: 10, offset: 1 }}>
                            <LangCategory />
                        </Col>
                        <Col xs={{ span: 2, offset: 5 }}>
                            <h2>{itemIndex + 1}/10</h2>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Jumbotron className="justify-content-center text-center grayBox2">


                        <SlideDown>
                            <Row>
                                <Col>
                                    {/* <CardGradient> */}
                                    <Card className="myCard">
                                        <Card.Img className="numberImage" variant="top" src={presContent[itemIndex].imageUrl} />

                                        <Card.Body>
                                            <Card.Title className="word"><h2>{presContent[itemIndex].targetWord}</h2></Card.Title>
                                            <hr></hr>
                                            <ReactAudioPlayer
                                                src={presContent[itemIndex].audioToPlay}
                                                controls
                                            />
                                            <div>
                                                <p className="words">{presContent[itemIndex].phonetic || presContent[itemIndex].explanation}</p>
                                            </div>
                                            <hr />
                                            <UserAudio />
                                            <hr />
                                            {itemIndex > 0 &&
                                                <Button className="previousback" onClick={handlePresDataChangeBack}>
                                                    < FontAwesomeIcon icon={faAngleDoubleLeft} size="4x" />
                                                    {/* Previous */}
                                                </Button>
                                            }
                                            <Button className="previousback" onClick={itemIndex !== 9 ? handlePresDataChange : goToQuiz}>
                                                < FontAwesomeIcon icon={faAngleDoubleRight} size="4x" />
                                                {/* Next */}
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                    {/* </CardGradient> */}
                                    {/* {itemIndex !== 9 ? "Next" : "Go to Quiz -->"} */}
                                </Col>
                            </Row>
                        </SlideDown>
                    </Jumbotron>
                </Container>
            }
        </>
    );
}