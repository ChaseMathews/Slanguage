import React from "react";
import CardBody from "./ScoreCardBody";
import useState from "react";

const [count] = useState([]);
/
class Score extends React.Component {
    

    state = {
        
        count: 0
    };

    
    correctAnswer = () => {
        
        this.setState({ count: this.state.count + 3 });
        
    };

    
    wrongAnswer = () => {
        
        this.setState({ count: this.state.count - 1 });
    };


    render() {
        return (

            <Card.text>
        score={this.state.count}
        correctAnswer={this.correctAnswer}
        wrongAnswer={this.wrongAnswer}

            </Card.text>
        );
    }
}

export default Score;