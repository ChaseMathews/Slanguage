import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LangHeader from './selectLangHeader';
import CarouselFlags from '../Carousel'
import Carousel from '../3dcarousel'
import { UserContext } from '../../utils/Context';

export default function SelectLang() {

    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <Container>

            <Row className="justify-content-center">

                <Col>
                    <LangHeader />
                    <hr></hr>
                    <Carousel />
                </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row className="justify-content-center">
                <Col sm={7} md={7} lg={7}>
                    <CarouselFlags />
                </Col>
            </Row>
        </Container>
    );
}



