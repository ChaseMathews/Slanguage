const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyQuiz1Schema = new Schema(
    {
        language: { type: String, required: true },
        questions: [
            {
                imageUrl: {
                    type: String
                },
                phrase: {
                    type: String
                },
                answerOptions: [{
                    type: String
                }],
                correctAnswer: {
                    type: String
                }
            }
        ]
    }
);

const BodyQuiz1 = mongoose.model("BodyQuiz1", bodyQuiz1Schema);

module.exports = BodyQuiz1;