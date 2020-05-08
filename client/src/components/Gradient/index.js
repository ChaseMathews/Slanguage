import React from 'react'
import "./style.css"
import { Jumbotron } from 'react-bootstrap'



export default function Gradient(props) {

    return (
            <Jumbotron className="back-gradient justify-content-center text-center">
                {props.children}
            </Jumbotron>

    )
}