const router = require("express").Router();
const db = require("../../models");
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/")
  .get(quizController.findAll)


router.get('/:language', (req, res) => {
  db.Quiz
      .find({ language: req.params.language })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})


module.exports = router;
