import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col, Jumbotron, Modal, Image } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import "./style.css";
import { UserContext } from '../../utils/Context';


export default function QuizCard() {
  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);

  const { user, setUser, currentLang, setCurrentLang, comeFromPres, setComeFromPres, ageModal, setAgeModal } = useContext(UserContext);
  const [score, setScore] = useState(0)
  const [disabled, setDisabled] = useState(false);
  const [modal, setModal] = useState();
  const [modalEnd, setModalEnd] = useState(false);
  const [modalPrem, setModalPrem] = useState(false);
  const [hint, setHint] = useState(false)
  const history = useHistory();
  const { lang, lesson } = useParams();
  const language = lang || currentLang;
  const [btnVarient, setBtnVarient] = useState({
    button_1: "primary",
    button_2: "primary",
    button_3: "primary"
  })


  useEffect(() => {
    setCurrentLang(language);
    if (lesson === "numbers") {
      loadNumQuiz();
      setModal(true);
    } else if (lesson === "slang") {
      loadSlangQuiz();
      setModal(true);
    } else if (lesson === "profanity") {
      loadProfanityQuiz();
      setModal(false);
      setAgeModal(!comeFromPres);
    } else if (lesson === "body1") {
      loadBodyQuiz1();
      setModal(true);
    } else {
      setModal(false);
      setModalPrem(true);
    }
  }, []);

  function loadNumQuiz() {
    API.getNumQuizData(lang)
      .then(res => {
        setQuizContent(res.data[0].questions)
      })

      .catch(err => console.log(err));
  };

  function loadSlangQuiz() {
    API.getSlangQuizData(lang)
      .then(res => {
        setQuizContent(res.data[0].questions)
      })

      .catch(err => console.log(err));
  };

  function loadProfanityQuiz() {
    API.getProfanityQuizData(lang)
      .then(res => {
        setQuizContent(res.data[0].questions)
      })

      .catch(err => console.log(err));
  };

  function loadBodyQuiz1() {
    API.getBodyQuiz1Data(lang)
      .then(res => {
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
    setHint(false)
  }

  const updateUserResults = () => {
    let resultsIndex;
    let lessonIndex;
    let resultObject = {};

    for (let i = 0; i < user.results.length; i++) {
      if (user.results[i].language === currentLang) {
        resultsIndex = i;
        break
      }
    }
    if (resultsIndex === undefined) {
      resultObject = {
        language: currentLang,
        lesson: [
          {
            name: lesson,
            score: score
          }
        ]
      }
      API.updateUserResults(user._id, resultObject)
        .then(res => {
          setUser(res.data);
        })
        .catch(err => console.log(err));
    } else {
      for (let i = 0; i < user.results[resultsIndex].lesson.length; i++) {
        if (user.results[resultsIndex].lesson[i].name === lesson) {
          lessonIndex = i;
          break
        }
      }
      if (lessonIndex !== undefined) {
        resultObject = {
          ...user.results[resultsIndex].lesson[lessonIndex],
          score: score
        }
        API.updateExistingUserLesson(user._id, { resultsIndex: resultsIndex, lessonIndex: lessonIndex, resultObject })
          .then(res => {
            API.getUserData(user._id)
              .then(userData => setUser(userData.data))
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err));
      } else {
        resultObject = {
          name: lesson,
          score: score
        }
        API.updateUserLesson(user.results[resultsIndex]._id, resultObject)
          .then(res => {
            API.getUserData(user._id)
              .then(userData => setUser(userData.data))
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err));
      }
    }
  };

  const handleScore = e => {
    e.preventDefault()

    const { value } = e.target
    const { name } = e.target

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
      setHint(true)
    }

    if (index === 9 && quizContent[9].correctAnswer === value) {
      setBtnVarient({
        ...btnVarient,
        [name]: "success",
      });
      setScore(score + 3)
      setDisabled(!disabled);
      setModalEnd(true);
    }

  }

  const quizReset = () => {
    setModalEnd(false);
    setModal(true);
    setIndex(0);
    setScore(0);
    btnsPrimary();
    setDisabled(false);
    updateUserResults();
  }

  

  const goToDash = () => {
    setModalEnd(false);
    updateUserResults();
    history.push(`/DashboardCards/${language}`);
  }

  const goBackToPres = () => {
    setComeFromPres(false);
    history.push(`/${lang}/presentation/${lesson}`);
  }

  const goBackToLessons = () => {
    history.push(`/LessonMenu/quiz/${lang}`);
    setAgeModal(false);
  }

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setAgeModal(false);
  };

  const startQuiz = () => {
    setModal(false);
    setComeFromPres(false);
    setAgeModal(false);
  }

  const continueAgeConf = () => {
    setAgeModal(false);
    setModal(true);
  }


  return (
    <>
      {ageModal &&
        <Modal show={show} onHide={handleClose} backdrop="static" center styles={{ overlay: { background: "#B3F1F8" } }}>
          <Modal.Header>
            <Modal.Body>
              <p id="modalBody4"><strong>WARNING:</strong></p>
              <p className="modalBody5">Your grandma would not approve of the following content due to explicit language.</p>
              <p className="modalBody5">Do you want to continue?</p>
            </Modal.Body>
          </Modal.Header>
          <Image src="https://us.123rf.com/450wm/sevalv/sevalv1811/sevalv181100416/114143404-displeased-angry-elderly-mother-with-grey-hair-looking-from-under-forehead-with-irritated-expression.jpg?ver=6" styles={{ height: "50px" }} fluid />
          <Modal.Footer>
            <Button variant="primary" onClick={goBackToLessons}><strong>Go Back</strong></Button>
            <Button variant="danger" onClick={continueAgeConf}><strong>Continue</strong></Button>
          </Modal.Footer>
        </Modal>
      }

      {modalPrem &&
        <Modal show={show} onHide={handleClose} backdrop="static" center styles={{ overlay: { background: "#B3F1F8" } }}>
          <Modal.Header>
            <Modal.Body id="modalBody">Oops! Update to Slanguage Premium to take this quiz.</Modal.Body>
          </Modal.Header>
          <Image src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/slangIconPlus.png" styles={{ height: "100px", width: "300px" }} fluid />
          <Modal.Footer>
            {
              comeFromPres ?
                <Button variant="danger" onClick={goBackToPres}><strong>Go Back</strong></Button>
                :
                <Button variant="danger" onClick={goBackToLessons}><strong>Back to Quizzes</strong></Button>
            }
            <Button variant="danger" disabled><strong>Update</strong></Button>
          </Modal.Footer>
        </Modal>
      }

      {modal &&

        <Modal show={show} onHide={handleClose} backdrop="static" center styles={{ overlay: { background: "#B3F1F8" } }}>
          <Modal.Header>
            <Modal.Title id="modalBody">Ready to practice what you've learned in {lang} {lesson}?</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">Correct answers= <strong>+3 points</strong></Modal.Body>
          <Modal.Body id="modalBody2">Wrong answers= <strong>-1 point</strong></Modal.Body>
          <Modal.Body id="modalBody3">Good Luck!</Modal.Body>

          <Modal.Footer>
            {comeFromPres &&
              <Button variant="success" onClick={goBackToPres}><strong>Go Back</strong></Button>
            }
            <Button variant="success" onClick={startQuiz}><strong>Let's Do This! --></strong></Button>
          </Modal.Footer>
        </Modal>
      }

      {quizContent && !modal &&
        <Container>
          {/* {index <= 9 && */}
          <Card className="score">
            Score: {score}
          </Card>
          {/* } */}
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
                      <h2>{quizContent[index].phrase}</h2>
                    </div>
                    <br></br>
                    {hint &&
                      <div>
                        HINT: {quizContent[index].example}
                      </div>

                    }


                  </Col>
                ) : ""}


                <Col className="choices" sm={lesson !== "numbers" ? 3 : 4}>
                  <Button variant={btnVarient.button_1} id="quizButton1" size="lg" disabled={disabled} name="button_1" onClick={handleScore} block value={quizContent[index].answerOptions[0]} > {quizContent[index].answerOptions[0]}  </Button>


                  <Button variant={btnVarient.button_2} id="quizButton2" size="lg" disabled={disabled} name="button_2" onClick={handleScore} block value={quizContent[index].answerOptions[1]}>{quizContent[index].answerOptions[1]} </Button>


                  <Button variant={btnVarient.button_3} id="quizButton3" size="lg" disabled={disabled} name="button_3" onClick={handleScore} block value={quizContent[index].answerOptions[2]}> {quizContent[index].answerOptions[2]}</Button>


                  {
                    index !== 9 && disabled &&
                    <Button onClick={handleImageChange} variant="danger" disabled={!disabled} className="nextBtn" value="next" name="next">NEXT</Button>
                  }

                  {
                    modalEnd && disabled &&
                    <Modal show={show} onHide={handleClose} backdrop="static" center styles={{ overlay: { background: "#B3F1F8" } }}>
                      <Modal.Header>
                        <Modal.Title id="modalTitle">Total Score: {score}!</Modal.Title>
                      </Modal.Header>
                      <Modal.Footer>
                        <Button variant="danger" onClick={goToDash}><strong>Back to Dashboard</strong></Button>
                        <Button variant="danger" onClick={quizReset}><strong>Take Quiz Again</strong></Button>
                      </Modal.Footer>
                    </Modal>
                  }
                </Col>
              </Row>
            </Card.Body>
          </Jumbotron>
        </Container>
      }
    </>

  )
}