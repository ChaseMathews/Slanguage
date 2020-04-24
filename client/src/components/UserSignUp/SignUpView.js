import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import SignUpForm from './SignUpForm';
import SignUpBtn from './SignUpBtn';



export default function SignUp() {


  return (
          <Container>
              <hr></hr>
              <Row>
                  <Col md={{ span: 8 }}>
                      <h1>Image goes here</h1>
                  </Col>
  
                  <Col md={{ span: 4, offset: 8 }}>

                      <SignUpForm />
                      <SignUpBtn />
                      
                       <Link to='/SelectLanguage'><Submit/></Link> 
                      
                  </Col>
              </Row>
          </Container>
      );
  }



