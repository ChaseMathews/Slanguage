import React, { useState, useEffect, useReducer } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import "./style.css";


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

  const history = useHistory();
  const { lang } = useParams();
  const { lesson } = useParams();

  useEffect(() => {
    lesson === "numbers" ? loadNumQuiz() : loadSlangQuiz();
  }, []);

  function loadNumQuiz() {
    API.getNumQuizData(lang)
      .then(res => {
        console.log(res.data[0].questions)
        setQuizContent(res.data[0].questions)
      })

      .catch(err => console.log(err));
  };

  function loadSlangQuiz() {
    API.getSlangQuizData(lang)
      .then(res => {
        console.log(res.data[0].questions)
        setQuizContent(res.data[0].questions)
      })

      .catch(err => console.log(err));
  };

  const handleImageChange = () => {
    setIndex(prev => {
      setDisplay(false)
      return prev + 1
    })
  }

  const handleScore = e => {
    e.preventDefault()
    console.log(e.target.value)

    const { value } = e.target


    console.log(quizContent)
    console.log(quizContent[index].answerOptions)




    if (quizContent[index].correctAnswer === value) {

      setDisplay(true)
      setScore(score + 3)


    } else {

      setScore(score - 1)



    }
    console.log(score)


  }

  const handleResults = e => {
    const { name } = e.target
    setResults({
      ...results,
      [name]: false
    })
  }

  const goToDash = () => {
    history.push(`/Dashboard/${lang}`);
  }

  return (
    <>
      {quizContent &&
        <Container>
          <Col sm="4">
          <Card className="score">
          Score: {score}
          </Card>
          </Col>
          <Jumbotron>
            <Card.Body>
              <Row>
              <Card>
                <Col sm="4">
                  
                  <Card.Img className="numberImage" variant="top" src={quizContent[index].imageUrl} />
                  
                </Col>
                </Card>

                <Col className="choices" sm="6">
                  <Button variant={quizContent[index].correctAnswer === quizContent[index].answerOptions[0] && display ? "success" : "danger"} size="lg" onClick={handleScore} block value={quizContent[index].answerOptions[0]} > {quizContent[index].answerOptions[0]}  </Button>


                  <Button variant={quizContent[index].correctAnswer === quizContent[index].answerOptions[1] && display ? "success" : "danger"} size="lg" onClick={handleScore} block value={quizContent[index].answerOptions[1]}>{quizContent[index].answerOptions[1]} </Button>


                  <Button variant={quizContent[index].correctAnswer === quizContent[index].answerOptions[2] && display ? "success" : "danger"} size="lg" onClick={handleScore} block value={quizContent[index].answerOptions[2]}> {quizContent[index].answerOptions[2]}</Button>
                </Col>
              </Row>

              <Row>
                {index !== 9 ?
                  <Button onClick={handleImageChange} variant="danger" className="nextbutton" md={{ span: 3, offset: 3 }}>NEXT</Button>
                  :
                  <Button onClick={goToDash} variant="danger" className="">Back to Dashboard</Button>
                }

              </Row>

            </Card.Body>
          </Jumbotron>


        </Container>
      }
    </>

  )
}






