import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Button, Row } from 'react-bootstrap';
import CardGradient from '../CardGradient'



export default function LessonCards() {
    const { lang } = useParams();
    const { type } = useParams();

    return (

        <Row>
            <CardDeck>
                {/* <CardGradient> */}

                <Card border='info' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/originals/4c/ea/e7/4ceae7ca22156bb1996f384a34afeab9.gif" />
                    <Card.Body>
                        <Card.Title>Numbers</Card.Title>
                        <Card.Text className="card-text">
                            {type === 'quiz' ? `Practice ` : `Learn `} numbers 1 - 10 in <strong> {lang}</strong>!{' '}
                        </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/numbers` : `/${lang}/presentation/numbers`}><Button>Click Here!</Button></Link>
                    </Card.Body>
                </Card>

                {/* </CardGradient> */}

                <Card border='info' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media.giphy.com/media/FE0WTM8BG754I/giphy.gif" />
                    <Card.Body>
                        <Card.Title>Colors</Card.Title>
                        <Card.Text>
                            Going on a trip? {type === 'quiz' ? `Practice ` : `Learn `} {' '}
                        </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/travel` : `/${lang}/presentation/travel`}><Button disabled>Click Here!</Button></Link>
                    </Card.Body>
                    </Card>
                    <Card border='info' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media1.giphy.com/media/l4pvtiRoOQ3QgQB3hp/source.gif" />
                    <Card.Body>
                        <Card.Title>Basic Phrases</Card.Title>
                        <Card.Text>
                            Going on a trip? {type === 'quiz' ? `Practice ` : `Learn `} some basic phrases vocabulary!{' '}
                        </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/travel` : `/${lang}/presentation/travel`}><Button disabled>Click Here!</Button></Link>
                    </Card.Body>
                </Card>
                
            </CardDeck>
        </Row>


    )
}