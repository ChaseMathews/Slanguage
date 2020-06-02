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
// router.route("/logout")
//   .get(req.session.destroy((err) => {
//     if (err) return next(err)
//     req.logout()
//     // req.session = null;
//     res.sendStatus(200)
//   }));

// router.route('/logout')
//   .get((req, res, next) => {
//     // Get rid of the session token. Then call `logout`; it does no harm.
//     req.logout();
//     req.session.destroy(function (err) {
//       if (err) { return next(err); }
//       // The response should indicate that the user is no longer authenticated.
//       return res.send({ authenticated: req.isAuthenticated() });
//     });
//   });

router.route('/logout')
  .get((req, res) => {
    console.log('logging out');
    req.logout();
    req.session = null;
    res.redirect('/');
  });

// router.route('/logout')
//   .get(function (req, res) {
//     req.session.destroy(function (err) {
//       res.clearCookie('connect.sid');
//       res.redirect('/'); //Inside a callback… bulletproof!
//     });
//   });

module.exports = router;
