import React, { useState, useEffect, useReducer } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import NavBar from '../NavBar'


export default function QuizCard() {
  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);
  let [results, setResults] = useState({
    ButtonOne: true,
    ButtonTwo: true,
    ButtonThree: true
  });


const {language} = useParams()
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
    setIndex(prev => {

     return prev + 1
    }) 
  }

  const handleScore = e => {
    e.preventDefault()
    console.log(e.target.value)
    // if(quizContent[index].correctAnswer === e.target.value) {
    //     score + 3;
    // } else {
    //   score - 1;
    // }
  }

  const handleResults = e => {
    setResult({
      ...results,
      [e.target.name]: false
    })
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
                <Button variant={results.ButtonOne ? "primary" : "danger"} size="lg" onClick={handleScore} block name="ButtonOne" value={quizContent[index].answerOptions[0]} />
                <Button variant={results.ButtonOne ? "primary" : "danger"} size="lg" onClick={handleScore} block name="ButtonOne" value={quizContent[index].answerOptions[1]} />
                <Button variant={results.ButtonOne ? "primary" : "danger"} size="lg" onClick={handleScore} block name="ButtonOne" value={quizContent[index].answerOptions[2]} />
                
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






