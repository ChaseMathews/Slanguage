import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SelectLangForm() {

    return (
        <ListGroup as="ul" active>
            <ListGroup.Item as="li">
            <Link to="/LessonMenu/spanish">
                <Button variant="danger" size="lg" block>
                    Español
          </Button>
          </Link>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <Link to="/LessonMenu/navajo">
                <Button variant="warning" size="lg" block>
                    Navajo
                </Button>
                </Link>

            </ListGroup.Item>

        </ListGroup>
    )
}