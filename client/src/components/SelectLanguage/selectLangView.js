import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectLangForm from './selectLangForm';
import LangHeader from './selectLangHeader';
import CarouselFlags from '../Carousel'

export default function SelectLang() {

    return (
     <Container>
         <hr></hr>
         
         <Row>
         <Col md="7">
         <CarouselFlags />
             </Col>
            <Col md="5">
             <LangHeader />
             <SelectLangForm />
             </Col>
         </Row>
     </Container>
    );
}



