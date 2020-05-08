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
                
                <Card.Img variant="top" img src="https://lh3.googleusercontent.com/proxy/8S2__TsMoNm-rsnAxTXmuXUOL7uOD21rJjDjNzxAg9rOZBNE2RVrNqV5bbG_sJCHJCbErLldhfdoqEm9j_adDzy644jy37Wniei8RueVGyqUcr4" />
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