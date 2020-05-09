import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import "./style.css";
import { UserContext } from '../../utils/Context';


export default function QuizCard() {
  const { user, currentLang } = useContext(UserContext);
  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  let [results, setResults] = useState({
    ButtonOne: true,
    ButtonTwo: true,
    ButtonThree: true
  });

  const [score, setScore] = useState(0)
  const [display, setDisplay] = useState(false)
  const history = useHistory();
  const { lang, lesson } = useParams();
  const language = lang || currentLang;
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

  const btnsPrimary = () => {
    setBtnVarient({
      ...btnVarient,
      button_1: "primary",
      button_2: "primary",
      button_3: "primary"
    })
  }

  const handleImageChange = () => {
    setIndex(prev => {
      return prev + 1
    })
    btnsPrimary();
    setDisabled(false);
  }

  //   const updateUserResults = e => {
  //     e.preventDefault();
  //     console.log(e.target.value);
  //     const { value } = e.target;
  //     console.log(value);

  //     API.updateUser(user.id, { 
  //       results: [
  //         {
  //             language: "Spanish",
  //             lesson: [
  //               {
  //                 name: "Numbers",
  //                 score: 7
  //               }
  //             ]
  //         } 
  //     })
  //         .then(res => {
  //             console.log(res.data);
  //             setCurrentLang(res.data.currentLanguage);
  //             history.push(`/Dashboard/${res.data.currentLanguage}`);
  //         }) 
  //         .catch(err => console.log(err));

  // };



  const handleScore = e => {
    e.preventDefault()
    console.log(e.target.value)

    const { value } = e.target
    const { name } = e.target
    console.log(name)
    console.log(quizContent[index].answerOptions)

    if (quizContent[index].correctAnswer === value) {
      setBtnVarient({
        ...btnVarient,
        [name]: "success",
      });
      setScore(score + 3)
      setDisabled(!disabled);
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
    history.push(`/DashboardCards/${language}`);
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
                  <Col sm={lesson !== "numbers" ? 3 : 4}>

                    <Card.Img className="numberImage" variant="top" src={quizContent[index].imageUrl} />

                  </Col>
                </Card>
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


                <Col className="choices" sm={lesson !== "numbers" ? 3 : 4}>
                  <Button variant={btnVarient.button_1} id="quizButton1" size="lg" disabled={disabled} name="button_1" onClick={handleScore} block value={quizContent[index].answerOptions[0]} > {quizContent[index].answerOptions[0]}  </Button>


                  <Button variant={btnVarient.button_2} id="quizButton2" size="lg" disabled={disabled} name="button_2" onClick={handleScore} block value={quizContent[index].answerOptions[1]}>{quizContent[index].answerOptions[1]} </Button>


                  <Button variant={btnVarient.button_3} id="quizButton3" size="lg" disabled={disabled} name="button_3" onClick={handleScore} block value={quizContent[index].answerOptions[2]}> {quizContent[index].answerOptions[2]}</Button>

                </Col>
              </Row>

              <Row>
                <Col sm={lesson !== "numbers" ? 3 : 4}>
                  <Row>
                    {/* {index !== 9 && disabled && */}
                    {index !== 9 &&
                      <Button onClick={handleImageChange} variant="danger" disabled={!disabled} className="" value="next" name="next">NEXT</Button>
                    }
                    {
                      index === 9 && disabled &&
                      <Button onClick={goToDash} variant="danger" className="">Back to Dashboard</Button>
                    }

                  </Row>
                </Col>
              </Row>

            </Card.Body>
          </Jumbotron>


        </Container>
      }
    </>

  )
}