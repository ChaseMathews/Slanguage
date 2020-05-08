import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import "./style.css";

export default function LangCategory() {
    const { lang } = useParams();
    const { type } = useParams();

    const title = type === "quiz" ? "Practice " + lang : "Learn " + lang

    // const url = lang === "Spanish" ? "/SpanishPresentation/" : "/NavajoPresentation/";
    return (
        <Row>
            <Col sm="1">
        {lang && <img className="logo" src={"https://raw.githubusercontent.com/J-Navajo/Updated-Portfolio/master/assets/images/" + lang.toLowerCase() + ".png"} />}
            </Col>
            <Col sm="11">
        <h1 className="lang">{title}</h1>
        </Col>
        </Row>
    );
}