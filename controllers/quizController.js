const db = require("../models");

// Defining method (find all questions) for the QuizController
module.exports = {
  findAll: (req, res) => {
    db.Quiz
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
