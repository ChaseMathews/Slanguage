import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import "./style.css";

export default function LangCategory() {
    const { lang } = useParams();
    const { type } = useParams();

    const title = type === "quiz" ? "Practice " + lang : "Learn " + lang

    return (
        <Row>
            <Col>
                <h1 className="lang">{title}</h1>
            </Col>
        </Row>
    );
}