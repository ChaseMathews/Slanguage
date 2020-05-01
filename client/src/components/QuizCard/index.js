import React, { useState, useEffect, useReducer } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import NavBar from '../NavBar'


export default function QuizCard() {

  useEffect(() => {
    loadQuiz()
  }, [])

  function loadQuiz() {
    API.getQuizQuestions(language)
      .then(res => {
        console.log(res.data[0].questions)
        setQuizContent(res.data[0].questions)
      })

      .catch(err => console.log(err));
  };

  const handleImageChange = () => {
    setIndex(prev => prev + 1)
  }



  return (
    <>
      {quizContent &&
        <div>
          <NavBar />
          <Card >
            <Row>
              <Col sm={4}>
                <Card.Img variant="top" src={quizContent[index].imageUrl} />
              </Col>
              <Col sm={4}>
                <Button onClick={() => dispatch('increment')} variant="primary" size="lg" block>{quizContent[index].answerOptions[0]}</Button>
                <Button variant="primary" size="lg" block>{quizContent[index].answerOptions[1]}</Button>
                <Button variant="primary" size="lg" block>{quizContent[index].answerOptions[2]}</Button>
              </Col>
              <Col sm={4}>
                <Row>

                  <Button onClick={handleImageChange} variant="primary" className="">NEXT</Button>

                </Row>
              </Col>
            </Row>
          </Card>

        </div>
      }
    </>

  )
}






