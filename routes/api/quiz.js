const router = require("express").Router();
const db = require("../../models");
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/numbers/:lang")
  .get(quizController.findAllNumQuizData)

router.route("/slang/:lang")
  .get(quizController.findAllSlangQuizData)


module.exports = router;
