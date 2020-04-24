import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectLangForm from './selectLangForm';
import LangHeader from './selectLangHeader';


export default function SelectLang() {

    return (
     <Container>
         <hr></hr>
         <Row>
             <Col md={{ span: 6, offset: 3 }}>
             <LangHeader />
             <SelectLangForm />
             </Col>
         </Row>
     </Container>
    );
}



