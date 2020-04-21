const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/languageapp"
);

const quizSeed = [
  {
    title: "The Dead Zone",
    question: "Stephen King",
    answers: "a, b, c"
  },
  {
    title: "Blah",
    question: "Sup?",
    answers: "a, b, c"
  }
];

db.Quiz
  .remove({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
