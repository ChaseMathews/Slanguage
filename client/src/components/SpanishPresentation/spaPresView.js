import React from 'react';
import { Container, Jumbotron, Card, Button} from 'react-bootstrap';
import SpaPresQuizBtn from './spaPresQuizBtn';
import PresImage from "./presImage"
import "./style.css"


export default function SpanishPresentation() {

    // imageUrl: "https://lh4.googleusercontent.com/MyjyB7iT4G_BGrkO7cuJh9PxSEw4STmLeUS1OwEFopj5Gw_M75JrvYWpofZq6AEjXu2zQreBjoS35OCkyEFVL_dxhojfPx9FqK6bQXs",
    // targetWord: "uno",
    // audioToPlay: "https://soundcloud.com/karen-g-montes-74139791/uno",
    // phonetic: "OOh-noh"

    return (
        <Container>
            <hr></hr>
            <Jumbotron>

                <Card className="cardHolder" style={{ width: '18rem' }}>
                    <PresImage />
                    {/* <Card.Img variant="top" src="https://p7.hiclipart.com/preview/994/690/368/loudspeaker-computer-icons-sound-icon-call-icon.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Uno</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go to next</Button>
                    </Card.Body>
                </Card>
            </Jumbotron>
        </Container>
    );
}