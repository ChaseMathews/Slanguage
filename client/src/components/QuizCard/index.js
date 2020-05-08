import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';



export default function QuizCard() {
  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);
  let [results, setResults] = useState({
    ButtonOne: true,
    ButtonTwo: true,
    ButtonThree: true
  });
  
  const [score, setScore] = useState(0)
  const [display, setDisplay] = useState(false)
  const history = useHistory();
  const { lang, lesson } = useParams();
  const [btnVarient, setBtnVarient] = useState({
    button_1: "primary",
    button_2: "primary",
    button_3: "primary"

  })
  

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
    const {name} = e.target
    console.log(name)
    console.log(quizContent[index].answerOptions)


      if (quizContent[index].correctAnswer === value) {

      setBtnVarient({
        ...btnVarient,
          [name]: "success"

      })
      setScore(score + 3)


    } else {
      setBtnVarient({
        ...btnVarient,
        [name]: "danger"

      })

      setScore(score - 1)

    }


    

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
        <div>
          score:{score}
          <Card>
            <Row>
              <Col sm={lesson !== "numbers" ? 3 : 4}>
                <Card.Img variant="top" src={quizContent[index].imageUrl} />
              </Col>
              {lesson !== "numbers" ? (
                  <Col sm={3}>
                   <div>
                     What does {quizContent[index].phrase} mean? 
                   </div>
                   <br></br>
                   <div>
                     Example: {quizContent[index].explanation}
                   </div>
                  </Col>
              ) : ""} 
              <Col sm={lesson !== "numbers" ? 3 : 4}>
                <Button variant= {btnVarient.button_1} size="lg" name="button_1" onClick={handleScore} block value={quizContent[index].answerOptions[0]} > {quizContent[index].answerOptions[0]}  </Button>


                <Button variant={btnVarient.button_2} size="lg" name="button_2" onClick={handleScore} block value={quizContent[index].answerOptions[1]}>{quizContent[index].answerOptions[1]} </Button>


                <Button variant={btnVarient.button_3} size="lg" name="button_3" onClick={handleScore} block value={quizContent[index].answerOptions[2]}> {quizContent[index].answerOptions[2]}</Button>

              </Col>
              <Col sm={lesson !== "numbers" ? 3 : 4}>
                <Row>
                  {index !== 9 ?
                    <Button onClick={handleImageChange} variant="danger" className="">NEXT</Button>
                    :
                    <Button onClick={goToDash} variant="danger" className="">Back to Dashboard</Button>
                  }

                </Row>
              </Col>
            </Row>
          </Card>

        </div>
      }
    </>

  )
}






