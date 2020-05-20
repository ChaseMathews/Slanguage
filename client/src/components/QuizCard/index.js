import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API"
import { Card, Button, Container, Row, Col, Jumbotron, Modal } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import "./style.css";
// import ModalBox from '../Modal/index';
import { UserContext } from '../../utils/Context';


export default function QuizCard() {
  const [quizContent, setQuizContent] = useState()
  let [index, setIndex] = useState(0);
  let [results, setResults] = useState({
    ButtonOne: true,
    ButtonTwo: true,
    ButtonThree: true
  });

  const { user, currentLang } = useContext(UserContext);
  const [score, setScore] = useState(0)
  const [disabled, setDisabled] = useState(false);
  const [display, setDisplay] = useState(false)
  const [modal, setModal] = useState(true);
  const [modalEnd, setModalEnd] = useState(false);
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
    console.log(index);
  }

  index > 9 && setModalEnd(true);

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

  const goToDash = () => {
    setModalEnd(false);
    history.push(`/DashboardCards/${language}`);
  }

  // console.log(modal);
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setModal(false);
  };

  return (
    <>

      {modal &&

        <Modal show={show} onHide={handleClose} center styles={{ overlay: { background: "#B3F1F8" } }}>
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">Ready to practice what you've learned?</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">Correct answers = <strong>+3 points</strong></Modal.Body>
          <Modal.Body id="modalBody2">Wrong answers= <strong>-1 point</strong></Modal.Body>
          <Modal.Body id="modalBody3">Good Luck!</Modal.Body>

          <Modal.Footer>
            <Button variant="success" onClick={() => setModal(false)}><strong>Let's Do  This! --></strong></Button>
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
                    <div>
                      <i>{quizContent[index].example}</i>
                    </div>
                  </Col>
                ) : ""}


                <Col className="choices" sm={lesson !== "numbers" ? 3 : 4}>
                  <Button variant={btnVarient.button_1} id="quizButton1" size="lg" disabled={disabled} name="button_1" onClick={handleScore} block value={quizContent[index].answerOptions[0]} > {quizContent[index].answerOptions[0]}  </Button>


                  <Button variant={btnVarient.button_2} id="quizButton2" size="lg" disabled={disabled} name="button_2" onClick={handleScore} block value={quizContent[index].answerOptions[1]}>{quizContent[index].answerOptions[1]} </Button>


                  <Button variant={btnVarient.button_3} id="quizButton3" size="lg" disabled={disabled} name="button_3" onClick={handleScore} block value={quizContent[index].answerOptions[2]}> {quizContent[index].answerOptions[2]}</Button>


                  {index <= 9 && disabled &&

                    <Button onClick={handleImageChange} variant="danger" disabled={!disabled} className="nextBtn" value="next" name="next">NEXT</Button>
                    
                  }
                  {
                    modalEnd &&
                      <Modal show={show} onHide={handleClose} center styles={{ overlay: { background: "#B3F1F8" } }}>
                        <Modal.Header closeButton>
                          <Modal.Title id="modalTitle">Total Score: {score}!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body id="modalBody">Correct answers = <strong>+3 points</strong></Modal.Body>
                        <Modal.Body id="modalBody2">Wrong answers= <strong>-1 point</strong></Modal.Body>
                        <Modal.Body id="modalBody3">Good Luck!</Modal.Body>
              
                        <Modal.Footer>
                          <Button variant="danger" onClick={goToDash}><strong>Back to Dashboard</strong></Button>
                          <Button variant="danger" onClick={() => setModal(true)}><strong>Take Quiz Again</strong></Button>
                        </Modal.Footer>
                      </Modal>
                    }
                    {/* // <Button onClick={goToDash} variant="danger" className="nextBtn">Back to Dashboard</Button> */}
                  
                </Col>
              </Row>
            </Card.Body>
          </Jumbotron>
        </Container>
      }
    </>

  )
}