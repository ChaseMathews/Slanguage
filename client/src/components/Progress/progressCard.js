import React from 'react';
import { Card, CardDeck, Button, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CardGradient from '../CardGradient'

export default function ProgressCard(props) {

    return (
        
        <Col md={{ span: 6, offset: 3 }}>
       
           <Card.Body className="presCardBody text-center">
            <CardGradient className="slangGradientMargin">          
                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title className="capital">{props.lesson}</Card.Title>
                        <Card.Text>
                            {props.score}/30 Points
                    </Card.Text>
                        <Link to={`/${props.language}/presentation/${props.lesson}`}><Button className="capital">Review {props.lesson}</Button></Link>{' '}
                        <Link to={`/QuizCard/${props.language}/${props.lesson}`}><Button>Retake Quiz</Button></Link>{' '}
                    </Card.Body>
                </Card>
            </CardGradient>
            </Card.Body>
            
         </Col> 
       
        
        
    )
}



//  <CardGradient className="slangGradientMargin">
//  <Card border='danger' style={{ width: '18rem' }}>
//      <Card.Img variant="top" src="https:cdn.dribbble.com/users/2056807/screenshots/7815777/dope.gif" />
//      <Card.Body>
//          <Card.Title>More Slang</Card.Title>
//          <Card.Text>
//              {type === 'quiz' ? `Practice ` : `Learn `} some slang words and phrases in <strong> {lang}</strong>!
//          </Card.Text>
//          <Link to={type === 'quiz' ? `/QuizCard/${lang}/slang2` : `/${lang}/presentation/slang2`}>
//              <Button>Click Here!</Button>
//          </Link>
//      </Card.Body>
//  </Card>