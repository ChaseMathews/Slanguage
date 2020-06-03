const router = require("express").Router();
const presController = require("../../controllers/presController");
const isAuthenticated = require("../../controllers/isAuthenticated");

// Matches with "/api/presentation"
router.route("/numbers/:lang")
    .get(isAuthenticated, presController.findAllNumPresData)

router.route("/slang/:lang")
    .get(isAuthenticated, presController.findAllSlangPresData)

router.route("/body1/:lang")
    .get(isAuthenticated, presController.findAllBodyPres1Data)

router.route("/body2/:lang")
    .get(isAuthenticated, presController.findAllBodyPres2Data)

router.route("/body3/:lang")
    .get(isAuthenticated, presController.findAllBodyPres3Data)

router.route("/body4/:lang")
    .get(isAuthenticated, presController.findAllBodyPres4Data)

router.route("/calendar/:lang")
    .get(isAuthenticated, presController.findAllCalendarPresData)

router.route("/colors/:lang")
    .get(isAuthenticated, presController.findAllColorsPresData)

router.route("/days/:lang")
    .get(isAuthenticated, presController.findAllDaysPresData)

router.route("/profanity/:lang")
    .get(isAuthenticated, presController.findAllProfanityPresData)

router.route("/seasons/:lang")
    .get(isAuthenticated, presController.findAllSeasonsPresData)

router.route("/travel1/:lang")
    .get(isAuthenticated, presController.findAllTravelPres1Data)

router.route("/travel2/:lang")
    .get(isAuthenticated, presController.findAllTravelPres2Data)

router.route("/travel3/:lang")
    .get(isAuthenticated, presController.findAllTravelPres3Data)

module.exports = router;
