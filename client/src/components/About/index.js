import React, { useContext } from 'react'
import "./style.css"
import { Jumbotron, Card } from 'react-bootstrap'
import { UserContext } from '../../utils/Context';



export default function About() {

    const { user, currentLang } = useContext(UserContext);

    return (
        <Jumbotron>
            <Card.Body className="about">
                <h1>About the App</h1>
                <p>
                    The team at Slanguage is passionate about learning languages! Our goal was to create a language app that had something most language apps are missing… Slang. Lingo. Colloquialisms. In other words, the expressions you may not find in a dictionary or within the classroom. And for those language learners that do want the basics, Slanguage also offers other awesome categories to learn and practice with!
                </p>
                <p>
                    Slanguage is meant for anyone that wants to pick up a new language and connect with people from all over the world! Learn, practice, check your progress, chat, have fun, repeat. Before you know it, you'll be speaking like a true local of the communities of your chosen language(s). Click on "My Dashboard" to get started learning some of the world's most spoken languages!
                </p>
            </Card.Body>
        </Jumbotron>

    )
}