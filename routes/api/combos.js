const router = require("express").Router();
const comboController = require("../../controllers/comboController");

router.route("/")
.get(comboController.findAll);

module.exports = router;