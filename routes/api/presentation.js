const router = require("express").Router();
const presController = require("../../controllers/presController");
const isAuthenticated = require("../../controllers/isAuthenticated");

// Matches with "/api/presentation"
router.route("/numbers/:lang")
    .get(isAuthenticated, presController.findAllNumPresData)

router.route("/slang/:lang")
    .get(isAuthenticated, presController.findAllSlangPresData)

module.exports = router;
