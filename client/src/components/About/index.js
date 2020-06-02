import React, { useContext } from 'react'
import "./style.css"
import { Jumbotron, Card, Image, Container, Row, Col } from 'react-bootstrap'
import { UserContext } from '../../utils/Context';




export default function About() {

    const { user, currentLang } = useContext(UserContext);

    return (
        <Container>
        <Jumbotron className="grayBox1" >
            
                <Card.Body>
                <h1>About the App</h1>
                <p>
                    The team at Slanguage is passionate about learning languages! Our goal was to create a language app that had something most language apps are missing… Slang. Lingo. Colloquialisms. In other words, the expressions you may not find in a dictionary or within the classroom. And for those language learners that do want the basics, Slanguage also offers other awesome categories to learn and practice with!
                </p>
                <p>
                    Slanguage is meant for anyone that wants to pick up a new language and connect with people from all over the world! Learn, practice, check your progress, chat, have fun, repeat. Before you know it, you'll be speaking like a true local of the communities of your chosen language(s). Click on "My Dashboard" to get started learning some of the world's most spoken languages!
                </p>
                </Card.Body>              
                
                </Jumbotron>
                <Card.Body className="team text-center">
                <h1 className="team">Meet the Team</h1>
                <hr />
                <Row>
                        <Col>
                        
                            <Image className="profImages" src="https://avatars3.githubusercontent.com/u/57241476?s=460&u=c101a90ddf64df3a7298c4d59b451cabd0908c51&v=4" roundedCircle />
                            <div  className="tooltip1">
                            <h4 >Karen Sosa</h4><span className="tooltiptext"><h3>Karen</h3><p>a little blurb about Karen.</p></span>
                            </div>
                        </Col>
                    
                        <Col>

                            <Image className="profImages" src="https://avatars2.githubusercontent.com/u/56829409?s=460&u=515f9615a0fc438134947916b45c82f774c57e2f&v=4g" roundedCircle />
                            <div  className="tooltip1">
                            <h4>Shannon Scirghio</h4><span className="tooltiptext"><h3>Shannon</h3><p>a little blurb about Shannon.</p></span>
                            </div>
                        </Col>
                    
                        <Col>
                            <Image className="profImages" src="https://avatars0.githubusercontent.com/u/57340399?s=460&u=35e107cea016848b8384df6aea8277e4c6a40984&v=4" roundedCircle />
                            <h4>"J" Stanley</h4>
                        </Col>
                    
                        <Col>
                            <Image className="profImages" src="https://avatars0.githubusercontent.com/u/56329215?s=460&u=a9594c3cf35b60aa7806c8e38244c3fb0502918b&v=4" roundedCircle />
                            <h4>Chase Mathews</h4>
                        </Col>
                    </Row>
                    </Card.Body>

        </Container>
    )
}