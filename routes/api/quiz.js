const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/books"
router.route("/")
  .get(quizController.findAll)
  .post(quizController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(quizController.findById)
  .put(quizController.update)
  .delete(quizController.remove);

module.exports = router;
