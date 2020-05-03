const router = require("express").Router();
const db = require("../../models");
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/numbers")
  .get(quizController.findAllNumQuizData)

router.route("/slang")
  .get(quizController.findAllSlangQuizData)


router.route('/:language')  
  .get(quizController.findBy)



module.exports = router;
