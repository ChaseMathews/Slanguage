import React from 'react';
import { Container, Row, Col, Button, ListGroup, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function DashboardMenu() {

    return (
        <>

            <Container>
                <Row>
                    <Col sm={6}>
                        <ListGroup as="ul" active>

                            <ListGroup.Item as="li">
                                <Link to="/LessonMenu/:language">
                                    <Button variant="primary" size="lg" block>Learn</Button>
                                </Link>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <Link to="/QuizMenu/:language">
                                    <Button variant="primary" size="lg" block>Practice</Button>
                                </Link>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <Link to="/ProgressCard/:user">
                                    <Button variant="primary" size="lg" block>Check Progress</Button>
                                </Link>
                            </ListGroup.Item>

                        </ListGroup>
                        <ListGroup.Item as="li">
                            <Link to="/SelectLanguage">
                                <Button variant="primary" size="lg" block>Change Language</Button>
                            </Link>
                        </ListGroup.Item>
                    </Col>
                </Row>


            </Container >
        </>

    )
}