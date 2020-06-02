const router = require("express").Router();
const db = require("../../models");
const quizController = require("../../controllers/quizController");
const isAuthenticated = require("../../controllers/isAuthenticated");


// Matches with "/api/quiz"
router.route("/numbers/:lang")
  .get(isAuthenticated, quizController.findAllNumQuizData)

router.route("/slang/:lang")
  .get(isAuthenticated, quizController.findAllSlangQuizData)

router.route("/body1/:lang")
  .get(isAuthenticated, quizController.findAllBodyQuiz1Data)

router.route("/profanity/:lang")
  .get(isAuthenticated, quizController.findAllProfanityQuizData)


module.exports = router;
