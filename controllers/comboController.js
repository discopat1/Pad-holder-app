const db = require("../models");

var controller = {

    findAll: function (req, res) {
        db.ComboList
            .find(req.query)
            .then(dbModel => {
                console.log("RETURNED: ", dbModel)
                shuffleArray(dbModel)
                res.json(dbModel[0])
            })
            .catch(err => res.status(422).json(err));

        function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

    },

    findBoxing: function (req, res) {
        db.ComboList
            .find({boxing: true})
            .then(dbModel => {
                console.log("RETURNED: ", dbModel)
                shuffleArray(dbModel)
                res.json(dbModel[0])
            })
            .catch(err => res.status(422).json(err));

        function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

    },

    findKickboxing: function (req, res) {
        db.ComboList
            .find({kickboxing: true})
            .then(dbModel => {
                console.log("RETURNED: ", dbModel)
                shuffleArray(dbModel)
                res.json(dbModel[0])
            })
            .catch(err => res.status(422).json(err));

        function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

    },

    findMuayThai: function (req, res) {
        db.ComboList
            .find({muaythai: true})
            .then(dbModel => {
                console.log("RETURNED: ", dbModel)
                shuffleArray(dbModel)
                res.json(dbModel[0])
            })
            .catch(err => res.status(422).json(err));

        function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

    },

    findMma: function (req, res) {
        db.ComboList
            .find({mma: true})
            .then(dbModel => {
                console.log("RETURNED: ", dbModel)
                shuffleArray(dbModel)
                res.json(dbModel[0])
            })
            .catch(err => res.status(422).json(err));

        function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }

    }

    


}

module.exports = controller