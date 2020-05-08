import React from 'react';
import { useParams, Link } from 'react-router-dom';
import "./style.css";

export default function LangCategory() {
    const { lang } = useParams();
    const { type } = useParams();

    const title = type === "quiz" ? "Practice " + lang : "Learn " + lang

    // const url = lang === "Spanish" ? "/SpanishPresentation/" : "/NavajoPresentation/";
    return (
        <>
        <h1 className="lang">{title}</h1>
        </>
    );
}