import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

export default function LangCategory() {
    const { lang } = useParams();
    const url = lang === "Spanish" ? "/SpanishPresentation/" : "/NavajoPresentation/";
    return (
        <Row><h1>{lang}</h1></Row>
    );
}