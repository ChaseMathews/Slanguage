import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';

export default function Carousel() {
    return (
        <div className="banner">
        <section id="dg-container" className="dg-container">
            <div className="dg-wrapper">
                <Link to="/LessonMenu/Spanish" className="dg-center">
                    <img src="https://imgc.allpostersimages.com/img/print/u-g-PQR7U00.jpg?w=550&h=550&p=0" />
                    <h3>Español</h3>
                </Link>
                <Link to="/LessonMenu/Navajo">
                    <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/flag-of-navajo-nation-world-art-prints-and-designs.jpg" />
                    <h3>Diné</h3>
                </Link>
                <Link to="/LessonMenu/Italian">
                    <img src="https://i.pinimg.com/originals/67/fe/a7/67fea724434b5d8a1afea597e31cb467.jpg" />
                    <h3>Italiano</h3>
                </Link>
                <Link to ="/LessonMenu/German">
                    <img src="https://www.germanpulse.com/wp-content/uploads/2011/07/german-flag.jpg" />
                    <h3>Deutsch</h3>
                </Link>
                <Link to="/LessonMenu/French" >
                    <img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/27/141093-France-flag-French-748x468.jpg" />
                    <h3>Français</h3>
                </Link>
            </div>
            <ol className="button" id="lightButton">
                <li index="0" />
                <li index="1" />
                <li index="2" />
                <li index="3" />
                <li index="4" />
            </ol>
            <nav>
                <span className="dg-prev"></span>
                <span className="dg-next"></span>
            </nav>
        </section>
    </div>
    )
}