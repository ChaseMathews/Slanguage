import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import NavBar from '../NavBar'


export default function QuizCard() {
  
  
  
  
  
  return (

   <div>
     <NavBar />
     <Card>
       <Row>
         <Col sm={4}>
         <Card.Img variant="top" src="https://www.nicepng.com/png/detail/44-444306_number-1-clipart-outline-number-one-clipart-png.png" />
         </Col>
         <Col sm={4}>
         <Button variant="primary" size="lg" block>Option 1</Button>
         <Button variant="primary" size="lg" block>Option 2</Button>
         <Button variant="primary" size="lg" block>Option 3</Button>
         </Col>
         <Col sm={4}>
           <Row>
             
           <Button variant="primary" className="">NEXT</Button>

           </Row>
         </Col>
       </Row>
     </Card>
     
   </div>

  )
}






