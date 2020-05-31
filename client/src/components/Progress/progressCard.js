import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function ProgressCard(props) {

    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{props.lesson}</Card.Title>
                    <Card.Text>
                        {props.score}/30 Points
                    </Card.Text>
                    <Link to={`/${props.language}/presentation/${props.lesson}`}><Button>Learn Again</Button></Link>{' '}
                    <Link to={`/QuizCard/${props.language}/${props.lesson}`}><Button>Retake Quiz</Button></Link>{' '}
                </Card.Body>
            </Card>
       </CardDeck>
    )
}