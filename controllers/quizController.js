const db = require("../models");

// Defining method (find all questions) for the QuizController
module.exports = {
  findAllNumQuizData: (req, res) => {
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
  }
};
