import React, { useContext, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap';
import './style.css'
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import { UserContext } from '../../utils/Context';



export default function CarouselFlags() {

    const { user, setUser, setCurrentLang } = useContext(UserContext);
    
    const history = useHistory();

    const updateUserCurrentLang = e => {
        e.preventDefault();
        const { value } = e.target;

        API.updateUser(user._id, { currentLanguage: value })
            .then(res => {
                console.log(res.data);
                setUser(res.data);
                setCurrentLang(value);
                history.push(`/DashboardCards/${value}`);
            })
            .catch(err => console.log(err));

    };


    return (

        <Carousel interval={3000}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/spanish.png"
                    alt="Mexico flag"
                />
                <Carousel.Caption className="carouselText">
                    <Button className="button btnText" size="lg" variant="link" onClick={updateUserCurrentLang} value="Spanish" >Español <br /> <h5> (Spanish) </h5></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/navajo.png"
                    alt="Navajo Nation flag"
                />
                <Carousel.Caption className="carouselText">
                    <Button className="button btnText" size="lg" variant="link" onClick={updateUserCurrentLang} value="Navajo" >Diné <br /> <h5> (Navajo) </h5></Button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/italian.png"
                    alt="Italy flag"
                />
                <Carousel.Caption className="carouselText">
                    <Button className="button btnText" size="lg" variant="link" onClick={updateUserCurrentLang} value="Italian" >Italiano <br /> <h5> (Italian) </h5></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/german.png"
                    alt="German flag"
                />
                <Carousel.Caption className="carouselText">
                    <Button className="button btnText" size="lg" variant="link" onClick={updateUserCurrentLang} value="German" >Deutsch <br /> <h5> (German) </h5></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/flags/resize/french.png"
                    alt="French"
                />
                <Carousel.Caption className="carouselText">
                    <Button className="button btnText" size="lg" variant="link" onClick={updateUserCurrentLang} value="French" >Français <br /> <h5> (French) </h5></Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}