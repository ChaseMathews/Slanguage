const router = require("express").Router();
const presController = require("../../controllers/presController");

// Matches with "/api/presentation"
router.route("/numbers/:lang")
    .get(presController.findAllNumPresData)

router.route("/slang/:lang")
    .get(presController.findAllSlangPresData)

module.exports = router;
