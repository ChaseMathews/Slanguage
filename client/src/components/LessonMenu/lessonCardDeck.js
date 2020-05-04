import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Button, Row } from 'react-bootstrap';
import LangCategory from "./lessonLangHeader"


export default function LessonCards() {
    const { lang } = useParams();
    const url = lang === "Spanish" ? "/SpanishPresentation/" : "/NavajoPresentation/";

    return (
        

        <CardDeck>
            <Row>
            <LangCategory />
            </Row>
            <Row>
            <Card>
                {/* We want to seed the card Image/Title/Info from the database */}
                <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/ea/e7/4ceae7ca22156bb1996f384a34afeab9.gif" />
                <Card.Body>
                    <Card.Title>Numbers</Card.Title>
                    <Card.Text className="card-text">
                        Learn numbers 1 - 10!{' '}
                    </Card.Text>
                    <Link to={url + "numbers"}><Button>Click Here!</Button></Link>
                </Card.Body>
            </Card>
            

            <Card>
                
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Slang</Card.Title>
                    <Card.Text>
                        Learn some slang words and phrases!{' '}
                    </Card.Text>
                    {/* <Link to={url + "slang"}><Button disabled>Click Here!</Button></Link> */}
                </Card.Body>
            </Card>

            <Card>
                
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Basic Travel Phrases</Card.Title>
                    <Card.Text>
                        Going on a trip? Learn some basic travel vocabulary!{' '}
                    </Card.Text>
                    {/* <Link to={url + "travel"}><Button disabled>Click Here!</Button></Link> */}
                </Card.Body>
            </Card>
            </Row>

        </CardDeck>

    )
}