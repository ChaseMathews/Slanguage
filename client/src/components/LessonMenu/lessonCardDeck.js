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
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/05/12/13/17/night-flight-2307018__480.jpg" />
                        <Card.Body>
                            <Card.Title>Basic Travel Phrases 1</Card.Title>
                            <Card.Text>
                                Going on a trip? {type === 'quiz' ? `Practice ` : `Learn `} some basic travel vocabulary!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/travel` : `/${lang}/presentation/travel`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727__480.jpg" />
                        <Card.Body>
                            <Card.Title>Basic Travel Phrases 2</Card.Title>
                            <Card.Text>
                                {cardText} some more basic travel vocabulary!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/travel2` : `/${lang}/presentation/travel2`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/22/10/04/traveler-1611614__480.jpg" />
                        <Card.Body>
                            <Card.Title>Basic Travel Phrases 3</Card.Title>
                            <Card.Text>
                                {cardText} some more basic travel vocabulary!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/travel3` : `/${lang}/presentation/travel3`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>
            </Row>
            <hr />

            <Row>
                <CardGradient>
                    <Card>
                        {/* We want to seed the card Image/Title/Info from the database */}
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/29/21/08/three-d-1781598__480.png" />
                        <Card.Body>
                            <Card.Title>The Body 1</Card.Title>
                            <Card.Text className="card-text">
                                {cardText} the human body!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/body1` : `/${lang}/presentation/body1`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/02/01/09/55/anatomy-2029276__480.png" />
                        <Card.Body>
                            <Card.Title>The Body 2</Card.Title>
                            <Card.Text>
                                {cardText} the human body!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/body2` : `/${lang}/presentation/body2`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/03/03/11/50/anatomy-1234026__480.jpg" />
                        <Card.Body>
                            <Card.Title>The Body 3</Card.Title>
                            <Card.Text>
                                {cardText} the human body!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/body3` : `/${lang}/presentation/body3`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/04/03/10/21/x-ray-310167__480.png" />
                        <Card.Body>
                            <Card.Title>The Body 4</Card.Title>
                            <Card.Text>
                                {cardText} the human body!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/body4` : `/${lang}/presentation/body4`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>
            </Row>
            <hr />
            <Row>
                <CardGradient>
                    <Card>
                        {/* We want to seed the card Image/Title/Info from the database */}
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/03/25/16/48/day-2173896__480.jpg" />
                        <Card.Body>
                            <Card.Title>Days of the Week</Card.Title>
                            <Card.Text className="card-text">
                                {cardText} the days of the week!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/daysOfTheWeek` : `/${lang}/presentation/daysOfTheWeek`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/09/21/18/22/color-455365__480.png" />
                        <Card.Body>
                            <Card.Title>Colors</Card.Title>
                            <Card.Text>
                                {cardText} colors!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/colors` : `/${lang}/presentation/colors`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150__480.png" />
                        <Card.Body>
                            <Card.Title>Calendar</Card.Title>
                            <Card.Text>
                                {cardText} to talk about the calendar!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/calendar` : `/${lang}/presentation/calendar`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>

                <CardGradient>
                    <Card>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/01/22/19/33/aurora-borealis-1156479__480.jpg" />
                        <Card.Body>
                            <Card.Title>Seasons and Stars</Card.Title>
                            <Card.Text>
                                {cardText} the seasons and skies!{' '}
                            </Card.Text>
                            <Link to={type === 'quiz' ? `/QuizCard/${lang}/seasons` : `/${lang}/presentation/seasons`}><Button disabled>Click Here!</Button></Link>
                        </Card.Body>
                    </Card>
                </CardGradient>
            </Row>




        </CardDeck>

    )
}