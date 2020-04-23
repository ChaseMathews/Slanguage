const router = require("express").Router();
const presController = require("../../controllers/presController");

// not finished, presController needs to be created
router.route("/")
    .get(presController.findAll);


module.exports = router;
