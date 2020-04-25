import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Button } from 'react-bootstrap';

export default function LessonCards() {
    const { lang } = useParams();
    const url = lang === "Spanish" ? "/SpanishPresentation/" : "/NavajoPresentation/";

    return (

        <CardDeck>
            <Card>
                {/* We want to seed the card Image/Title/Info from the database */}
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Numbers</Card.Title>
                    <Card.Text>
                        Learn numbers 1 - 10!{' '}
                    </Card.Text>
                    <Link to={url + "numbers"}><Button>Click Here!</Button></Link>
                </Card.Body>
            </Card>


            <Card>
                {/* We want to seed the card Image/Title/Info from the database */}
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Slang</Card.Title>
                    <Card.Text>
                        Learn some slang words and phrases!{' '}
                    </Card.Text>
                    <Link to={url + "slang"}><Button disabled>Click Here!</Button></Link>
                </Card.Body>
            </Card>

            <Card>
                {/* We want to seed the card Image/Title/Info from the database */}
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Basic Travel Phrases</Card.Title>
                    <Card.Text>
                        Going on a trip? Learn some basic travel vocabulary!{' '}
                    </Card.Text>
                    <Link to={url + "travel"}><Button disabled>Click Here!</Button></Link>
                </Card.Body>
            </Card>


        </CardDeck>

    )
}