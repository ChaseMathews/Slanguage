const router = require("express").Router();
const quizRoutes = require("./quiz");
const userRoutes = require("./user");
const presRoutes = require("./presentation");

// Routes
router.use("/quiz", quizRoutes);
router.use("/user", userRoutes);
router.use("/presentation", presRoutes);

module.exports = router;
