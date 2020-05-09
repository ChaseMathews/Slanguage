import React from 'react'
import "./style.css"
import { Card } from 'react-bootstrap'



export default function Polaroid() {

    return (
        <Card.Body className="card-container">
            <article className="cardt cardt--1">


            </article>

        <div className="polaroid-card" style={{--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg'); --angle: -5deg; --x: 5%; --y: 15%; --caption: 'Berlin in 2009'}}></div>

       <Card.Img className="cardt" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/berlin.jpg" />
        {/* <div className="polaroid-card" style="--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/london.jpg'); --angle: -1deg; --x: -10%; --y: -20%; --caption: 'London, 2001'"></div> */}
       
        {/* <div className="polaroid-card" style="--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/los-angeles.jpg'); --angle: -4deg; --x: -20%; --y: 5%; --caption: 'Los Angeles - 2004'"></div> */}
       
        {/* <div className="polaroid-card" style="--image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/448976/italy.jpg'); --angle: 7deg; --x: 10%; --y: -7%; --caption: 'Venice, 1999'"></div> */}
       
       </Card.Body>

    )
}