import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import NavBar from '../NavBar'


export default function QuizCard() {
  
  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);

  useEffect(() => {
    loadQuiz()
  }, [])

  function loadQuiz() {
    API.getQuizQuestions()
      .then(res => {
        setQuizContent(res.data[0].questions)
        console.log(res.data)
      })

      .catch(err => console.log(err));
  };

  const handleImageChange = () => {
    setIndex(prev => prev + 1)
  }
  // const handleImageChangeBack = () => {
  //   setIndex(prev => prev - 1)
  // }
  
  
  return (

   <div>
     <NavBar />
     <Card>
       <Row>
         <Col sm={4}>
         {/* <Card.Img variant="top" src={quizContent[index].imageUrl} /> */}
         </Col>
         <Col sm={4}>
  {/* <Button  variant="primary" size="lg" block>{quizContent[index].answerOptions[0]}</Button>
         <Button variant="primary" size="lg" block>{quizContent[index].answerOptions[1]}</Button>
         <Button variant="primary" size="lg" block>{quizContent[index].answerOptions[2]}</Button> */}
         </Col>
         <Col sm={4}>
           <Row>
             
           <Button onClick={handleImageChange} variant="primary" className="">NEXT</Button>

           </Row>
         </Col>
       </Row>
     </Card>
     
   </div>

  )
}






