import React from 'react'
import "./style.css"
import { Jumbotron, Card } from 'react-bootstrap'



export default function About() {

    return (
        <Jumbotron>
            <Card.Body className="about">
                <h1>About</h1>
                <p>This is our about page. Welcome!</p>
            </Card.Body>
            </Jumbotron>

    )
}