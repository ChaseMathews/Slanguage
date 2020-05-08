import React from 'react'
import "./style.css"
import { Card } from 'react-bootstrap'
import Presentation from '../Presentation'



export default function CardGradient(props) {

    return (
            <Card className="gradient-border justify-content-center text-center" id="card">
                {/* {props.children} */}
                <Presentation>
                    {props.children}
                </Presentation>
            </Card>

    )
}