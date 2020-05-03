const mongoose = require("mongoose");
const db = require("../models");
const quizSeeds = require("./quizSeeds.js");
const presSeeds = require("./presSeeds.js");


console.log(presSeeds[0]);

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/languageapp"
);

// Insert Number Presentation Seeds
db.NumPres
  .remove({})
  .then(() => db.NumPres.collection.insertMany(presSeeds[0]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Insert Slang Presentation Seeds
db.SlangPres
  .remove({})
  .then(() => db.SlangPres.collection.insertMany(presSeeds[1]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Insert Quiz Seeds
db.NumQuiz
  .remove({})
  .then(() => db.NumQuiz.collection.insertMany(quizSeeds[0]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.SlangQuiz
  .remove({})
  .then(() => db.SlangQuiz.collection.insertMany(quizSeeds[1]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
