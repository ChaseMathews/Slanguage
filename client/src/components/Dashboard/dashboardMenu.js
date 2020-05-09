import React, { useContext } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../utils/Context';


export default function DashboardMenu() {

    const { lang } = useParams();
    // const { currentLang } = useContext(UserContext);

    // const language = lang || currentLang

    return (
        <>

            <Container>
                <Row>
                    <Col sm={6}>
                        <ListGroup as="ul" active>

                            <ListGroup.Item as="li">
                                <Link to={"/LessonMenu/pres/" + lang}>
                                    <Button variant="primary" size="lg" block>Learn</Button>
                                </Link>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <Link to={"/LessonMenu/quiz/" + lang}>
                                    <Button variant="primary" size="lg" block>Practice</Button>
                                </Link>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <Link to="/Progress">
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