const router = require("express").Router();
const presController = require("../../controllers/presController");

// Matches with "/api/presentation"
router.route("/numbers")
    .get(presController.findAllNumPresData)

router.route("/slang")
    .get(presController.findAllSlangPresData)

module.exports = router;
