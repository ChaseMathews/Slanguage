import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectLangForm from './selectLangForm';


export default function SelectLang() {

    return (
     <Container>
         <Row>
             <Col>
             <SelectLangForm />
             </Col>
         </Row>
     </Container>
    );
}