const db = require("../models");

// Defining method (find all questions) for the QuizController
module.exports = {
  findAllNumQuizData: (req, res) => {
    // to deal with different languages
    console.log(req.originalUrl);
    db.NumQuiz
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllSlangQuizData: (req, res) => {
    db.SlangQuiz
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  findBy: (req, res) => {
    db.Quiz
      .find({ language: req.params.language })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
