import React from 'react';
import { Card, Row, Button, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CardGradient from '../CardGradient'
export default function ProgressCard(props) {
    return (
           <Row>
               <CardGradient>
                <Card border='danger' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title className="capital">{props.lesson}</Card.Title>
                        <Card.Text>
                            {props.score}/30 Points
                    </Card.Text>
                        <Link to={`/${props.language}/presentation/${props.lesson}`}>
                            <Button variant="info" className="capital">Review {props.lesson}</Button></Link>{' '}
                        <Link to={`/QuizCard/${props.language}/${props.lesson}`}>
                            <Button>Retake Quiz</Button></Link>{' '}
                    </Card.Body>
                </Card>
                </CardGradient>
            </Row>
    )
}