import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import ProgressCard from './progressCard';
import LanguageButton from './progressButton';
import { UserContext } from '../../utils/Context';
import Tooltip from 'react-tooltip-lite';
import { Link } from 'react-router-dom';
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


  const checkLanguages = () => {
    setLanguageList(languagesPracticed);
    setNotPracticed(languagesNotPracticed);
  }

  useEffect(() => {
    checkLanguages();
  }, [])


  return (
    <Container>
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
                tipContentHover="true"
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
    </Container >
  )
}