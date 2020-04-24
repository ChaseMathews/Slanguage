const router = require("express").Router();
const quizRoutes = require("./quiz");

// Book routes
router.use("/quiz", quizRoutes);

module.exports = router;
