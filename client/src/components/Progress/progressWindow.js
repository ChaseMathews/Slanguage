import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';





export default function ProgressCards() {




    return (


        <CardDeck>

            <Card>

                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Numbers Progress</Card.Title>
                    <Card.Text>
                        Your Quiz Scores{' '}
                    </Card.Text>
                    <Button>Learn</Button>{' '}
                    <Button>Practice</Button>{' '}
                </Card.Body>
            </Card>



            <Card>

                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Slang Progress</Card.Title>
                    <Card.Text>
                        Your Quiz Scores{' '}
                    </Card.Text>
                    <Button>Learn</Button>{' '}
                    <Button>Practice</Button>{' '}

                </Card.Body>
            </Card>



            <Card>

                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Travel Phrase Progress</Card.Title>
                    <Card.Text>
                        Your Quiz Scores{' '}
                    </Card.Text>
                    <Button>Learn</Button>{' '}
                    <Button>Practice</Button>{' '}

                </Card.Body>
            </Card>


        </CardDeck>

    )
}