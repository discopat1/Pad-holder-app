const mongoose = require("mongoose");
const db = require("../models");

// This file empties the ComboList collection and inserts the combos below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/comboList"
);

const comboSeed = [
    {
        combo: "Jab"
    },
    {
        combo: "Jab, cross"
    },
    {
        combo: "Jab, cross, hook"
    },
    {
        combo: "Jab, cross, hook, cross"
    },
    {
        combo: "Jab, cross, hook, cross, uppercut"
    },
    {
        combo: "Jab, round-kick"
    },
    {
        combo: "Jab, cross, round-kick"
    },
    {
        combo: "Jab, cross, hook, round-kick"
    },
    {
        combo: "Jab, cross, hook, cross, round-kick"
    },
    {
        combo: "Jab, cross, hook, cross, uppercut, round-kick"
    },
    {
        combo: "Superman jab, round-kick"
    },
    {
        combo: "Cross, switch-kick"
    },
    {
        combo: "jab, overhand"
    },
    {
        combo: "jab, cross, uppercut, cross"
    },
    {
        combo: "double jab, cross, low-hook, high-hook"
    },
    {
        combo: "cross, hook, round-kick"
    },
    {
        combo: "teep, cross, high-hook"
    },
    {
        combo: "cross, hook, cross, round-kick"
    }
];

db.ExerciseList
  .remove({})
  .then(() => db.ExerciseList.collection.insertMany(exerciseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  module.exports = comboSeed;