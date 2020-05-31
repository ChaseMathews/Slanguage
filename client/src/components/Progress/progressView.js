import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressCard from './progressCard';
import LanguageButton from './progressButton';
import { UserContext } from '../../utils/Context';


export default function ProgressView() {

  const { user } = useContext(UserContext);
  const [languageList, setLanguageList] = useState([]);
  const [notPracticed, setNotPracticed] = useState([]);

  const languages = ["Spanish", "French", "Italian", "German", "Navajo"];
  const userDbResultArr = user.results;
  const languagesPracticed = userDbResultArr.map(obj => obj.language);
  const languagesNotPracticed = languages.filter(diff => !languagesPracticed.includes(diff));

  const checkLanguages = () => {
    setLanguageList(languagesPracticed);
    setNotPracticed(languagesNotPracticed);
  }

  useEffect(() => {
    checkLanguages();
  }, [])

  const [languageClicked, setLanguageClicked] = useState(user.currentLanguage);

  const [resultObject] = user.results.filter(obj => obj.language === languageClicked);

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
          {notPracticed.map(lang => (
            <LanguageButton
              language={lang}
              disabled={true}
              value={lang}
              key={lang}
            />
          ))}
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {
            resultObject.lesson.map(obj => (
              <ProgressCard
                language={languageClicked}
                lesson={obj.name}
                score={obj.score}
                key={obj.name}
              />
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}