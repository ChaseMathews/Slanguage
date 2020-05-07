import React, { useState, useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';
import API from '../../utils/API';
import { UserContext } from '../../utils/Context';



export default function CarouselFlags() {

    const { user, currentLang, setCurrentLang } = useContext(UserContext);

    console.log(user.id);

    const history = useHistory();

    const setLanguage = () => {
        // setCurrentLang({ currentLang });
        // updateUserCurrentLang();
        // history.push(`/Dashboard/Spanish`);
    }

    const updateUserCurrentLang = e => {
        e.preventDefault();
        console.log(e.target.value);
        const { value } = e.target;
        console.log(value);

        API.updateUser(user.id, { currentLanguage: value })
            .then(res => {
                console.log(res.data)
                setCurrentLang(res.data)
            })
            .catch(err => console.log(err));

        history.push(`/Dashboard/${currentLang}`)
    };


    return (
        <Carousel interval={3000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://imgc.allpostersimages.com/img/print/u-g-PQR7U00.jpg?w=550&h=550&p=0"
                    alt="Mexico flag"
                />
                <Carousel.Caption className="carouselText">
                    {/* <h3>Español</h3> */}
                    {/* <Link to="/LessonMenu/Spanish"><h3>Español</h3></Link> */}
                    <Button className="button" size="lg" variant="link" onClick={updateUserCurrentLang} value="Spanish" >Español</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/flag-of-navajo-nation-world-art-prints-and-designs.jpg"
                    alt="Navajo Nation flag"
                />
                <Carousel.Caption className="carouselText">
                    {/* <Link to="/LessonMenu/Navajo"> */}
                    <Link to="/Dashboard/Navajo">
                        <h3>Diné</h3>
                    </Link>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/67/fe/a7/67fea724434b5d8a1afea597e31cb467.jpg"
                    alt="Italy flag"
                />
                <Carousel.Caption className="carouselText">
                    {/* <Link to="/LessonMenu/Italian"> */}
                    <Link to="/Dashboard/Italian">
                        <h3>Italiano</h3>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.germanpulse.com/wp-content/uploads/2011/07/german-flag.jpg"
                    alt="German flag"
                />
                <Carousel.Caption className="carouselText">
                    {/* <Link to="/LessonMenu/German"> */}
                    <Link to="/Dashboard/German">
                        <h3>Deutsch</h3>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://hdwallpaperim.com/wp-content/uploads/2017/08/27/141093-France-flag-French-748x468.jpg"
                    alt="French"
                />
                <Carousel.Caption className="carouselText">
                    {/* <Link to ="/LessonMenu/French"> */}
                    <Link to="/Dashboard/French">
                        <h3>Français</h3>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>



    )
}