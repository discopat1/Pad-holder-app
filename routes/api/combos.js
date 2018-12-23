const router = require("express").Router();
const comboController = require("../../controllers/comboController");
// Route for all combos
router.route("/")
.get(comboController.findAll);
// Route for boxing combos
router.route("/boxing")
.get(comboController.findBoxing);
module.exports = router;