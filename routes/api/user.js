const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.create)

// Matches with "/api/user/login"
router.route("/login")
  .post(userController.findOne)

// Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.updateResults)
  .delete(userController.remove);

  // Matches with "/api/user/lesson/:lessonId"
router.route("/lesson/:lessonId")
  .put(userController.updateLesson);

module.exports = router;
