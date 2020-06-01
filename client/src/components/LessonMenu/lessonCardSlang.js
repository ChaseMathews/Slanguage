import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Row, Button } from 'react-bootstrap';



export default function SlangCard() {
    const { lang } = useParams();
    const { type } = useParams();

    return (


        <CardDeck>

            <Row>
                <Card>

                    <Card.Img variant="top" className="numberImage" img src="https://media.tenor.com/images/6dfc55ff0bca826199661c684548d3e1/tenor.gif" />
                    <Card.Body>
                        <Card.Title><h2>Slang</h2></Card.Title>
                        <hr />
                        <Card.Text>
                            {type === 'quiz' ? `Practice ` : `Learn `} some slang words and phrases in <strong> {lang}</strong>!
                    </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/slang` : `/${lang}/presentation/slang`}><Button>Click Here!</Button></Link>
                    </Card.Body>
                </Card>
            </Row>

        </CardDeck>

    )
}