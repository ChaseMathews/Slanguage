const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema(
  {
    language: { type: String, required: true },
    questions: [
      {
        imageUrl: {
          type: String
        },
        answerOptions: {
          type: String
        },
        correctAnswer: {
          type: String
        },
        explanation: {
          type: String
        }
      }
    ]
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
