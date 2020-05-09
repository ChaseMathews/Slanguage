import React from 'react'
import "./style.css"
import { Card } from 'react-bootstrap'




export default function CardGradient(props) {

    return (
            <Card className="gradient-border justify-content-center text-center" id="kard">
                {props.children}
                
            </Card>

    )
}