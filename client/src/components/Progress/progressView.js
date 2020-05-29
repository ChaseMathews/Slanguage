import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import ProgressCards from './progressWindow';
import LanguageButtons from './progressButtons';
import { UserContext } from '../../utils/Context';



export default function ProgressPage() {
  const { user, currentLang } = useContext(UserContext);
  return (
      <Container>
        {/* <Jumbotron>
          <img src="https://giffiles.alphacoders.com/158/158667.gif" alt="under-construction"></img>
        </Jumbotron> */}
        <br></br>
      <h1 className="text-center">Check your Progress</h1>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <LanguageButtons />
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