import React, { useState, useEffect, useReducer } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';



export default function QuizCard() {
  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);
  let [results, setResults] = useState({
    ButtonOne: true,
    ButtonTwo: true,
    ButtonThree: true
  });
// const [display, setDisplay] =useState(false)
const [score, setScore] = useState(0)
const [display, setDisplay] = useState(false)



const {language} = useParams()

  useEffect(() => {
    loadQuiz()
  }, [])

  function loadQuiz() {
    API.getNumQuizData(language)
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

const {value} = e.target


    console.log(quizContent)
  console.log(quizContent[index].answerOptions)
    
    
    
    
    if(quizContent[index].correctAnswer === value) {
      
      setDisplay(true)
      setScore(score + 3) 
      
        
    } else {
      
      setScore(score -1)
      
      
    
    }
    console.log(score)

 
  }

  const handleResults = e => {
    const {name} = e.target
    setResults({
      ...results,
      [ name]: false
    })
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
                <Button variant={quizContent[index].correctAnswer===quizContent[index].answerOptions[0] && display ? "success" : "danger" } size="lg" onClick={handleScore} block value={quizContent[index].answerOptions[0]} > {quizContent[index].answerOptions[0]}  </Button>
                
                
                <Button variant={quizContent[index].correctAnswer===quizContent[index].answerOptions[1] && display ? "success" : "danger" } size="lg" onClick={handleScore} block value={quizContent[index].answerOptions[1]}>{quizContent[index].answerOptions[1]} </Button>
                
                
                <Button variant={quizContent[index].correctAnswer===quizContent[index].answerOptions[2] && display ? "success" : "danger" } size="lg" onClick={handleScore} block value={quizContent[index].answerOptions[2]}> {quizContent[index].answerOptions[2]}</Button>
                
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






