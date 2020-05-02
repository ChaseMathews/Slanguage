const router = require("express").Router();
const db = require("../../models");
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/")
  .get(quizController.findAll)


router.route('/:language')  
  .get(quizController.findBy)



module.exports = router;
