import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Row, Button } from 'react-bootstrap';



export default function SlangCard() {
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


        <CardDeck>

            <Row>
                <Card>

                    <Card.Img img src="https://media.tenor.com/images/6dfc55ff0bca826199661c684548d3e1/tenor.gif" />
                    <Card.Body>
                        <Card.Title><h2>Slang</h2></Card.Title>
                        <hr />
                        <Card.Text>
                            Learn some slang words and phrases in <strong> {lang}</strong>!
                    </Card.Text>
                        <Link to={url + "slang"}><Button>Click Here!</Button></Link>
                    </Card.Body>
                </Card>
            </Row>

        </CardDeck>

    )
}