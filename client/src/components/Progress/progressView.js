import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, CardDeck, Modal } from 'react-bootstrap';
import ProgressCard from './progressCard';
import LanguageButton from './progressButton';
import { UserContext } from '../../utils/Context';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";


export default function ProgressView() {

  const { user } = useContext(UserContext);
  const [languageList, setLanguageList] = useState([]);
  const [notPracticed, setNotPracticed] = useState([]);
  const languages = ["Spanish", "French", "Italian", "German", "Navajo", "Portuguese"];
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [languageClicked, setLanguageClicked] = useState(user ? user.currentLanguage : "");
  const userDbResultArr = user ? user.results : "";
  const languagesPracticed = user ? userDbResultArr.map(obj => obj.language) : "";
  const languagesNotPracticed = user ? languages.filter(diff => !languagesPracticed.includes(diff)) : "";
  const [resultObject] = user ? user.results.filter(obj => obj.language === languageClicked) : "";

  useEffect(() => {
    checkLanguages();
  }, [])

  const checkLanguages = () => {
    console.log(resultObject);
    if (resultObject) {
      setLanguageList(languagesPracticed)
      setNotPracticed(languagesNotPracticed)
    }
    else {
      setShow(true)
    }
  }


  const goToDash = () => {
    setShow(false);
    history.push(`/DashboardCards/${user.currentLanguage}`);
  }

  const handleClose = () => {
    setShow(false);
  };


  return (
    <>
      <Container>
        <br></br>
        <h1 className="text-center">Check your Progress</h1>
        <Row>
          <Col className="boxAppearance" md={{ span: 6, offset: 4 }}>
            {languageList.map(lang => (
              <LanguageButton
                language={lang}
                disabled={false}
                key={lang}
                value={lang}
                setLanguageClicked={setLanguageClicked}
                variant={languageClicked === lang}
              />
            ))}

            {
              notPracticed.map(lang => (
                <>
                  <LanguageButton
                    language={lang}
                    disabled={true}
                    value={lang}
                    key={lang}
                  />
                  <div className="tooltiptext" >
                    Go to <Link to={`/DashboardCards/${user.currentLanguage}`}>My Dashboard</Link> 
                    <br></br>
                    to practice this language!
                  </div>
                </ >
              ))}
          </Col>
        </Row>
        <br></br>

        <Row>
          <Col>
            <CardDeck >
              {resultObject ?
                resultObject.lesson.map(obj => (
                  <ProgressCard
                    language={languageClicked}
                    lesson={obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
                    score={obj.score}
                    key={obj.name}
                  />
                ))
                :
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  center
                  style={{ height: "50%", width: "75%", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                  closeButton
                >
                  <Modal.Body id="modalBody">You haven't taken any practice quizzes yet! Go to My Dashboard to get started!</Modal.Body>
                  <Button variant="danger" onClick={goToDash}><strong>Back to Dashboard</strong></Button>
                </Modal>
              }
            </CardDeck>
          </Col>
        </Row>
      </Container >
    </>
  )
}