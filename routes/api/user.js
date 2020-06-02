const router = require("express").Router();
const userController = require("../../controllers/userController");
const isAuthenticated = require("../../controllers/isAuthenticated");
const passport = require("../../controllers/passport");

// Matches with "/api/user"
router.route("/")
  .post(isAuthenticated, userController.create);

// Matches with "/api/user/login"
router.route("/login")
  .post(passport.authenticate('local'), (req, res) => {
    console.log("login req.user", req.user)
    res.json(req.user)
  });

// Matches with "/api/user/:id"
router.route("/:id")
  .put(isAuthenticated, userController.update)
  .delete(isAuthenticated, userController.remove)
  .get(isAuthenticated, userController.getUser);

// Matches with "/api/user/results/:userId"
router.route("/results/:userId")
  .put(isAuthenticated, userController.updateResults);

// Matches with "/api/user/lesson/:resultsId"
router.route("/lesson/:resultsId")
  .put(isAuthenticated, userController.updateLesson);

// Matches with "/api/user/existingLesson/:userId"
router.route("/existingLesson/:userId")
  .put(isAuthenticated, userController.updateExistingLesson);

// Matches with "/api/user/logout"

router.route('/logout')
  .get((req, res) => {
    console.log('logging out');
    req.logout();
    req.session = null;
    res.redirect('/');
  });

module.exports = router;
