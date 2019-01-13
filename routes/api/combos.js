const router = require("express").Router();
const comboController = require("../../controllers/comboController");
// Route for all combos
router.route("/")
.get(comboController.findAll);
// Route for boxing combos
router.route("/boxing")
.get(comboController.findBoxing);
// Route for kickboxing combos
router.route("/kickboxing")
.get(comboController.findKickboxing);
// Route for Muay thai combos
router.route("/muaythai")
.get(comboController.findMuayThai);
module.exports = router;