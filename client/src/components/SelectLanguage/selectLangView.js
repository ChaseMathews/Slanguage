import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectLangForm from './selectLangForm';
import LangHeader from './selectLangHeader';
import CarouselFlags from '../Carousel'
import Carousel from '../3dcarousel'

export default function SelectLang() {

    return (
        <Container>
            
            <Row className="justify-content-center">
                
                <Col>
                    <LangHeader />
                    <hr></hr>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col sm={7} md={7} lg={7}>
                    <CarouselFlags />
                </Col>
            </Row>
        </Container>
    );
}



