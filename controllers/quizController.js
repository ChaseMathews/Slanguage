const db = require("../models");

// Defining method (find all questions) for the QuizController
module.exports = {
  findAllNumQuizData: (req, res) => {
    db.NumQuiz
      .find({ language: req.params.lang })
      .then(dbModel => {
        console.log(req.params.lang);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findAllSlangQuizData: (req, res) => {
    db.SlangQuiz
      .find({ language: req.params.lang })
      .then(dbModel => {
        console.log(req.params.lang);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllBodyQuiz1Data: (req, res) => {
    db.BodyQuiz1
      .find({ language: req.params.lang })
      .then(dbModel => {
        console.log(req.params.lang);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findAllProfanityQuizData: (req, res) => {
    db.ProfanityQuiz
      .find({ language: req.params.lang })
      .then(dbModel => {
        console.log(req.params.lang);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
};
