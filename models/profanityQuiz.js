const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profanityQuizSchema = new Schema(
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

const ProfanityQuiz = mongoose.model("ProfanityQuiz", profanityQuizSchema);

module.exports = ProfanityQuiz;