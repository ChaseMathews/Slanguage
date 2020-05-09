import React, { useContext } from 'react'
import "./style.css"
import { Jumbotron, Card } from 'react-bootstrap'
import { UserContext } from '../../utils/Context';



export default function About() {

    const { user, currentLang } = useContext(UserContext);

    return (
        <Jumbotron>
            <Card.Body className="about">
                <h1>About</h1>
                <p>This is our about page. Welcome!</p>
            </Card.Body>
        </Jumbotron>

    )
}