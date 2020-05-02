const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/numbers")
  .get(quizController.findAllNumQuizData)

router.route("/slang")
  .get(quizController.findAllSlangQuizData)

module.exports = router;
