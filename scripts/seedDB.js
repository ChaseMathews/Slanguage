const mongoose = require("mongoose");
const db = require("../models");
const quizSeeds = require("../quizSeeds");
const presSeeds = require("../presSeeds")



mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/languageapp"
);
// Insert Presentation Seeds
db.Presentation
  .remove({})
  .then(() => db.Presentation.collection.insertMany(presSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



// Insert Quiz Seeds
db.Quiz
  .remove({})
  .then(() => db.Quiz.collection.insertMany(quizSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
