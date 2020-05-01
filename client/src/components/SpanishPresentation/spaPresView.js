import React from 'react';
import { Container, Jumbotron, Card, Button } from 'react-bootstrap';
import SpaPresQuizBtn from './spaPresQuizBtn';
import PresImage from "./presImage";
import "./style.css";
import UserAudio from "./userAudio";
import PlayAudio from "./playAudio";
import { slideInDown } from 'react-animations';
import styled, { keyframes }  from 'styled-components';


const SlideDown = styled.div`animation: 2s ${keyframes`${slideInDown}`} 1`;
export default function SpanishPresentation() {

    // imageUrl: "https://lh4.googleusercontent.com/MyjyB7iT4G_BGrkO7cuJh9PxSEw4STmLeUS1OwEFopj5Gw_M75JrvYWpofZq6AEjXu2zQreBjoS35OCkyEFVL_dxhojfPx9FqK6bQXs",
    // targetWord: "uno",
    // audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/uno",
    // phonetic: "OOh-noh"


    return (
        <Container>
            <hr></hr>
            <Jumbotron>
            <SlideDown>
                <Card className="cardHolder" style={{ width: '18rem' }}>
                    <PresImage />
                    
                        <Card.Body>
                            <Card.Title>Uno</Card.Title>
                            <PlayAudio url="https://cf-media.sndcdn.com/1JCfsLlYB6oM.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMUpDZnNMbFlCNm9NLjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1ODgwNDAzNzl9fX1dfQ__&Signature=CFZP7~0IND0EQtzk09znAoftiot8ILJkx9CdMzK90SVc3oPweWXuKf5BetOqXriu6N-aWfFhBQUhfIZQ0vFHrOyS473y7lomltELOTExUm9seDgx1TqMTjCVYhijJZcE3sYDt5wDUgkHdPi7oQ-ukGDMaqhPnNgLnXe0vyt5BZQGup2WiGkP388niDmEKJut9OBxiPdpAD8aOANFtmYF-hE8E~AQKhHZzj4-aA1FWrQ5qsFCTTkY7Lk9HbaJCAAxGOmZqd-ZMIzkXBgMnLeazezU0D8otSd03CLki4td7gVdpT2FeS-EcWaKGyNocwgyQfXPX2VsoiGUFXmA~N0UeQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" />
                            <Card.Img variant="top" id="audioIcon" src="https://p7.hiclipart.com/preview/994/690/368/loudspeaker-computer-icons-sound-icon-call-icon.jpg" />
                            <UserAudio />
                            <Button variant="primary">Go to next</Button>
                        </Card.Body>
                </Card>
                </SlideDown>
            </Jumbotron>
        </Container>
    );
}