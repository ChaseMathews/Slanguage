import React from 'react';
import { useParams, } from "react-router-dom";
import { CardDeck, Card, Row } from 'react-bootstrap';



export default function SlangCard() {
    const { lang } = useParams();
    // let url
    // if (lang === "Spanish") {
    //     url = "/Spanish/presentation/"
    // } else if (lang === "Navajo") {
    //     url = "/Navajo/presentation/"
    // } else if (lang === "French") {
    //     url = "/French/presentation/"
    // } else if (lang === "German") {
    //     url = "/German/presentation/"
    // } else if (lang === "Italian") {
    //     url = "/Italian/presentation/"
    // }

    return (
        

        <CardDeck>

            <Row>
            <Card>
                
                <Card variant="top" img src="https://lh3.googleusercontent.com/proxy/-z4R1Io7oW__YbroftlssvzIOv3ZEsm9DJraxDcIj-HqgYUevRLwpvmUiYFY4xV9VTKXwSA4Dxj2aci9woh6v50WzOeepfa0JNtnmuUQBgz5K1k" />
                <Card.Body>
                    <Card.Title><h2>Slang</h2></Card.Title>
                    <hr />
                    <Card.Text>
                        Learn some slang words and phrases in <strong> { lang }</strong>!
                    </Card.Text>
                    {/* <Link to={url + "slang"}><Button disabled>Click Here!</Button></Link> */}
                </Card.Body>
            </Card>
            </Row>

        </CardDeck>

    )
}