import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import SpaPresQuizBtn from './spaPresQuizBtn';
import PresImage from "./presImage"


export default function SpanishPresentation() {

    // imageUrl: "https://lh4.googleusercontent.com/MyjyB7iT4G_BGrkO7cuJh9PxSEw4STmLeUS1OwEFopj5Gw_M75JrvYWpofZq6AEjXu2zQreBjoS35OCkyEFVL_dxhojfPx9FqK6bQXs",
    // targetWord: "uno",
    // audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/uno",
    // phonetic: "OOh-noh"

    return (
        <Container>
            <hr></hr>
            <Jumbotron>
                <Row>
                    <PresImage />
                </Row>

                <Row>
                    <Col sm="9">
                        uno
                    </Col>
                    <Col sm="3">
                        Audio icon here
                    </Col>

                </Row>
                <Row>
                    <img src="https://img.favpng.com/20/6/2/computer-icons-sound-icon-loudspeaker-audio-png-favpng-E6vC4JcC5AS4fEcFRkKkiMNyx.jpg"></img>
                </Row>
                <Row>
                    Phonetic: 
                </Row>

                <Row>
                    <Col>
                        <SpaPresQuizBtn />
                    </Col>
                </Row>
            </Jumbotron>
        </Container>
    );
}