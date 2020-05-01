const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.create)

router.route("/login")
  .post(userController.findOne)

// Matches with "/api/user/:id"
router
  .route("/:id")
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
