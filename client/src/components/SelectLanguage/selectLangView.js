import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SelectLangForm from './selectLangForm';
import LangHeader from './selectLangHeader';
import CarouselFlags from '../Carousel'

export default function SelectLang() {

    return (
        <Container>
            <hr></hr>
            <Row className="justify-content-center">
                <Col sm={10} md={10} lg={10}>
                    <LangHeader />
                    <CarouselFlags />
                </Col>
            </Row>
        </Container>
    );
}



