import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import { Card, Button, Row, Col } from 'react-bootstrap';



export default function QuizCard() {

  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);

  useEffect(() => {
    loadQuiz()
  }, [])

  function loadQuiz() {
    API.getNumQuizData()
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
          <Card>
            <Row>
              <Col sm={4}>
                <Card.Img variant="top" src={quizContent[index].imageUrl} />
              </Col>
              <Col sm={4}>
                <Button variant="danger" size="lg" block>{quizContent[index].answerOptions[0]}</Button>
                <Button variant="danger" size="lg" block>{quizContent[index].answerOptions[1]}</Button>
                <Button variant="danger" size="lg" block>{quizContent[index].answerOptions[2]}</Button>
              </Col>
              <Col sm={4}>
                <Row>

                  <Button onClick={handleImageChange} variant="danger" className="">NEXT</Button>

                </Row>
              </Col>
            </Row>
          </Card>

        </div>
      }
    </>

  )
}






