import React from 'react';
import { useParams, Link} from "react-router-dom";
import { CardDeck, Card, Row, Button } from 'react-bootstrap';



export default function SlangCard() {
    const { lang } = useParams();

    const { type } = useParams();

    let url = "";
    let cardText = "";
   
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

    return (
        

        <CardDeck>

            <Row>
            <Card>
                
                <Card.Img variant="top" img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTiucP08BRZtP5IZr-otof0flykG4HtO8s9VLD0lDUkL6OowbX-&usqp=CAU" />
                <Card.Body>
                    <Card.Title><h2>Slang</h2></Card.Title>
                    <hr />
                    <Card.Text>
                        Learn some slang words and phrases in <strong> { lang }</strong>!
                    </Card.Text>
                    <Link to={url + "slang"}><Button>Click Here!</Button></Link>
                </Card.Body>
            </Card>
            </Row>

        </CardDeck>

    )
}