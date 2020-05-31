import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Button, Row } from 'react-bootstrap';
import CardGradient from '../CardGradient'



export default function LessonCards() {
    const { lang } = useParams();

    const { type } = useParams();

    let url = "";
    let cardText = "";

    if (type === "pres") {
        cardText = "Learn";
        if (lang === "Spanish") {
            url = "/Spanish/presentation/"
        } else if (lang === "Navajo") {
            url = "/Navajo/presentation/"
        } else if (lang === "French") {
            url = "/French/presentation/"
        } else if (lang === "German") {
            url = "/German/presentation/"
        } else if (lang === "Italian") {
            url = "/Italian/presentation/"
        }
    } else if (type === "quiz") {
        cardText = "Practice";
        if (lang === "Spanish") {
            url = "/QuizCard/Spanish/"
        } else if (lang === "Navajo") {
            url = "/QuizCard/Navajo/"
        } else if (lang === "French") {
            url = "/QuizCard/French/"
        } else if (lang === "German") {
            url = "/QuizCard/German/"
        } else if (lang === "Italian") {
            url = "/QuizCard/Italian/"
        }
    }

    return (

            <Row>
                <CardDeck>
                {/* <CardGradient> */}

                    <Card border='info' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/ea/e7/4ceae7ca22156bb1996f384a34afeab9.gif" />
                        <Card.Body>
                            <Card.Title>Numbers</Card.Title>
                            <Card.Text>
                            {cardText} numbers 1 - 10 in <strong> {lang}</strong>!
                            </Card.Text>
                            <Link to={url + "numbers"}><Button>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>

                    {/* <Card>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Numbers</Card.Title>
                            <Card.Text className="card-text">
                                {cardText} numbers 1 - 10!{' '}
                            </Card.Text>
                            <Link to={url + "numbers"}><Button>Click Here!</Button></Link>
                        </Card.Body>
                    </Card> */}
                {/* </CardGradient> */}

                <Card border='info' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://media.giphy.com/media/FE0WTM8BG754I/giphy.gif" />
                        <Card.Body>
                            <Card.Title>Colors</Card.Title>
                            <Card.Text>
                            {cardText} how to say colors in <strong> {lang}</strong>!
                            </Card.Text>
                            <Link to={url + "numbers"}><Button>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                    </CardDeck>
            </Row>


    )
}