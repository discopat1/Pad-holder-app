const router = require("express").Router();
const comboRoutes = require("./combos");

// combo routes
router.use("/combos", comboRoutes);

module.exports = router;