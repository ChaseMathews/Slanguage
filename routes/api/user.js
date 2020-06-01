const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.create);

// Matches with "/api/user/login"
router.route("/login")
  .post(userController.findOne);

// app.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
//   })
// );

// Matches with "/api/user/:id"
router.route("/:id")
  .put(userController.update)
  .delete(userController.remove)
  .get(userController.getUser);

// Matches with "/api/user/results/:userId"
router.route("/results/:userId")
  .put(userController.updateResults);

// Matches with "/api/user/lesson/:resultsId"
router.route("/lesson/:resultsId")
  .put(userController.updateLesson);

router.route("/existingLesson/:userId")
  .put(userController.updateExistingLesson);

module.exports = router;
