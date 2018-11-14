const db = require("../models");

var controller = {

    findAll: function (req, res) {
        db.ComboList
            .find(req.query)
            .then(dbModel => {
                console.log("RETURNED: ", dbModel)
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }



}

module.exports = controller