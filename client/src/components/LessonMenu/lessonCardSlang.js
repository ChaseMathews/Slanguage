import React from 'react';
import { useParams, Link } from "react-router-dom";
import { CardDeck, Card, Row, Button } from 'react-bootstrap';
import CardGradient from '../CardGradient';



export default function SlangCard() {
    const { lang } = useParams();
    const { type } = useParams();

    return (
        <Row>
            <CardGradient>
                <Card border='danger' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media.tenor.com/images/6dfc55ff0bca826199661c684548d3e1/tenor.gif" />
                    <Card.Body>
                        <Card.Title>Slang</Card.Title>
                        <Card.Text>
                            {type === 'quiz' ? `Practice ` : `Learn `} some slang words and phrases in <strong> {lang}</strong>!
                        </Card.Text>
                        <Link to={type === 'quiz' ? `/QuizCard/${lang}/slang` : `/${lang}/presentation/slang`}>
                            <Button>Click Here!</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardGradient>

            <CardGradient>
            <Card border='danger' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://media.tenor.com/images/6dfc55ff0bca826199661c684548d3e1/tenor.gif" />
                <Card.Body>
                    <Card.Title>Profanity</Card.Title>
                    
                    <Card.Text>
                    {type === 'quiz' ? `Practice ` : `Learn `}  some swear words and phrases in <strong> {lang}</strong>!
                    </Card.Text>
                    <Link to={type === 'quiz' ? `/QuizCard/${lang}/profanity` : `/${lang}/presentation/profanity`}>
                            <Button>Click Here!</Button>
                        </Link>
                </Card.Body>
                </Card>
                </CardGradient >
        </Row >

        

           
       
    )
}




