import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, Card } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
import QuizCardBody from './QuizCardBody';
import getQuizQuestions from "./src/utils/API";
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';

class QuizCard extends Component {

    state = {
        language: "",
        questions: [{
            imageUrl: "",
            answerOptions: [],
            correctAnswer: "",

        }
        ]
    };

    componentDidMount() {
        API.getQuizQuestions()
            .then(res => this.setState({
                language: res.data.language,
                questions: res.data.questions,
                imageUrl: res.data.imageUrl,
                answerOptions: res.data.answerOptions
            }))
            .catch(err => console.log(err));
    };

    // loadCardImg = () => {
    //     API.getCardImg()
    //       .then(res =>
    //         this.setState({
    //           imageUrl: res.data.imageUrl
    //         })
    //       )
    //       .catch(err => console.log(err));
    //   };
















    render() {
        return (
            <Container>
                <Jumbotron>
                    <Card>
                        <Row>
                            <Col>
                                <QuizCardBody imageUrl={this.state.imageUrl}>
                                    <QuizCard questions={this.state.questions} />
                                    <Button1 answerOptions={this.state.answerOptions[0]} />
                                    <Button2 answerOptions={this.state.answerOptions[1]} />
                                    <Button3 answerOptions={this.state.answerOptions[2]} />
                                </QuizCardBody>
                            </Col>
                        </Row>
                    </Card>
                </Jumbotron >
            </Container >
        )
    }
}

export default QuizCard;











