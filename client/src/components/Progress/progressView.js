import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import API from "../../utils/API";
import ProgressCards from './progressWindow';
import LanguageProgress from './progressLanguage';
import './style.css';



export default function ProgressPage() {

  return (
      <Container>
        <Jumbotron>
          <img src="https://giffiles.alphacoders.com/158/158667.gif" alt="under-construction"></img>
        </Jumbotron>
        {/* <br></br>
      <h1 className="text-center">Check your Progress</h1>
      <Row>
        <Col md={{ span: 6, offset: 4 }}>
          <LanguageProgress />
        </Col>
      </Row>
      <br></br>

      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <ProgressCards className="progress"/>
        </Col>
      </Row> */}
      </Container>
  )
}