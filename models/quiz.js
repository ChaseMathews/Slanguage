const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true },
  question: { type: String, required: true },
  answers: String,
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
