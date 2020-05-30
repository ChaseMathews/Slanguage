import React, { useState, useEffect, useContext } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import ProgressCards from './progressWindow';
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
            />
          ))}
          {notPracticed.map(lang => (
            <LanguageButton
              language={lang}
              disabled={true}
              key={lang}
            />
          ))}
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <ProgressCards />
        </Col>
      </Row>
    </Container>
  )
}