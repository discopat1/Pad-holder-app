const mongoose = require("mongoose");
const db = require("../models");

// This file empties the ComboList collection and inserts the combos below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/comboList"
);

const comboSeed = [
    {
        combo: "Jab",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross, uppercut",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross, uppercut, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Superman jab, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "Cross, switch-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "jab, overhand",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "jab, cross, uppercut, cross",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "double jab, cross, low-hook, high-hook",
        boxing: true,
        kickboxing: true,
        mma: true
    },
    {
        combo: "cross, hook, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "teep, cross, high-hook",
        boxing: false,
        kickboxing: true,
        mma: true
    },
    {
        combo: "cross, hook, cross, round-kick",
        boxing: false,
        kickboxing: true,
        mma: true
    }
];

db.ComboList
  .remove({})
  .then(() => db.ComboList.collection.insertMany(comboSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  module.exports = comboSeed;