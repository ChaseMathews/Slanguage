import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, CardDeck, Modal } from 'react-bootstrap';
import ProgressCard from './progressCard';
import LanguageButton from './progressButton';
import { UserContext } from '../../utils/Context';
import Tooltip from 'react-tooltip-lite';
import { Link, useHistory } from 'react-router-dom';
import "./style.css";


export default function ProgressView() {

  const { user } = useContext(UserContext);
  const [languageList, setLanguageList] = useState([]);
  const [notPracticed, setNotPracticed] = useState([]);
  const languages = ["Spanish", "French", "Italian", "German", "Navajo"];
  const userDbResultArr = user.results;
  const languagesPracticed = userDbResultArr.map(obj => obj.language);
  const languagesNotPracticed = languages.filter(diff => !languagesPracticed.includes(diff));
  const [languageClicked, setLanguageClicked] = useState(user.currentLanguage);
  const [resultObject] = user.results.filter(obj => obj.language === languageClicked);
  // const [modal, setModal] = useState(false);
  // const [show, setShow] = useState(false);
  const history = useHistory();

  
  const checkLanguages = () => {
    console.log(resultObject);
    if (resultObject) {
      setLanguageList(languagesPracticed)
      setNotPracticed(languagesNotPracticed)
    } 
    // else {
    //   setModal(true)
    //   setShow(true)
    // }
  }

  useEffect(() => {
    checkLanguages();
  }, [])

  // const goToDash = () => {
  //   setModal(false);
  //   history.push(`/DashboardCards/${user.currentLanguage}`);
  // }

  // const handleClose = () => {
  //   setShow(false);
  //   setModal(false);
  // };


  return (
    <Container>
      {/* {
        modal ?
        <Modal 
        show={show} 
        onHide={handleClose} 
        backdrop="static" 
        center 
        styles={{ overlay: { background: "#B3F1F8" } }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">You haven't taken any practice quizzes yet! Go to My Dashboard to get started!</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="danger" onClick={goToDash}><strong>Back to Dashboard</strong></Button>
          </Modal.Footer>
        </Modal>
      : */}
      <>
      <br></br>
      <h1 className="text-center">Check your Progress</h1>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
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
              <Tooltip
                content={(
                  <div>
                    Go to <Link to={`/DashboardCards/${user.currentLanguage}`}>My Dashboard</Link> to practice this language!
                  </div>
                )}
                direction="down"
                // tipContentHover="true"
                tagName="span">
                <LanguageButton
                  language={lang}
                  disabled={true}
                  value={lang}
                  key={lang}
                />
              </Tooltip>
            ))}
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <CardDeck>
            {
              resultObject.lesson.map(obj => (
                <ProgressCard
                  language={languageClicked}
                  lesson={obj.name.charAt(0).toUpperCase() + obj.name.slice(1)}
                  score={obj.score}
                  key={obj.name}
                />
              ))
            }
          </CardDeck>
        </Col>
      </Row>
      </>
      {/* } */}
    </Container >
  )
}