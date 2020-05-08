import React from 'react'
import "./style.css"
import { Card } from 'react-bootstrap'




export default function CardGradient(props) {

    return (
            <Card className="gradient-border" id="card">
                {props.children}
                
            </Card>

    )
}