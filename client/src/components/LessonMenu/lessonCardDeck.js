import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Button, Row } from 'react-bootstrap';
import CardGradient from '../CardGradient'



export default function LessonCards() {
    const { lang } = useParams();
    const { type } = useParams();

    return (


        <CardDeck>

            <Row>
                <CardGradient>
                    <Card>
                        {/* We want to seed the card Image/Title/Info from the database */}
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/ea/e7/4ceae7ca22156bb1996f384a34afeab9.gif" />
                        <Card.Body>
                            <Card.Title>Numbers</Card.Title>
                            <Card.Text className="card-text">
                            {type === 'quiz' ? `Practice ` : `Learn `} numbers 1 - 10!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/numbers` : `/${lang}/presentation/numbers`}><Button>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>

                        <Card.Img variant="top" src="https://media.tenor.com/images/ee40bd0af209d48bb1dff138041a9bad/tenor.gif" />
                        <Card.Body>
                            <Card.Title>Basic Travel Phrases</Card.Title>
                            <Card.Text>
                                Going on a trip? {type === 'quiz' ? `Practice ` : `Learn `} some basic travel vocabulary!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/travel` : `/${lang}/presentation/travel`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>
            </Row>


        </CardDeck>

    )
}