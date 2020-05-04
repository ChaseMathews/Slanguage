const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const numQuizSchema = new Schema(
  {
    language: { type: String, required: true },
    questions: [
      {
        imageUrl: {
          type: String
        },
        answerOptions: [{
          type: String
        }],
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

const NumQuiz = mongoose.model("NumQuiz", numQuizSchema);

module.exports = NumQuiz;
