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
        muaythai: true,
        mma: true
    },
    {
        combo: "Cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "High-hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Low-hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Uppercut",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Teep",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Switch-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Oblique-kick",
        boxing: false,
        kickboxing: false,
        muaythai: false,
        mma: true
    },
    {
        combo: "Side-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Spinning back-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Spinning hook-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Push-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Lead-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Rear-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Switch-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Rear-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, shoot",
        boxing: false,
        kickboxing: false,
        muaythai: false,
        mma: true
    },
    {
        combo: "Jab, rear-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, rear-elbow, uppercut",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, shoot",
        boxing: false,
        kickboxing: false,
        muaythai: false,
        mma: true
    },
    {
        combo: "Jab, rear-elbow, uppercut, round-kick",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, rear-elbow, lead-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, rear-elbow, rear-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-elbow, rear-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-elbow, rear-elbow, lead-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-elbow, rear-elbow, lead-knee, round-kick",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-elbow, cross",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-elbow, cross, switch-kick",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-hook",
        boxing: true,
        kickboxing: true,
        muaythai: true
    },
    {
        combo: "Jab, lead-hook, spinning hook-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-hook, spinning back-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-hook, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-hook, cross, hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, lead-hook, cross, rear-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, jab, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross, uppercut",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, rear-knee, lead-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, switch-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross, switch-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, cross, hook, cross, uppercut, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Superman jab, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Cross, switch-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "Jab, overhand",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "jab, cross, uppercut, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "double jab, cross, low-hook, high-hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "double jab, cross, lead-knee",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "double jab, cross, low-hook, high-hook, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, hook, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, hook, cross, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, hook, cross, hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, low-hook, high-hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "double cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, uppercut, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "uppercut, cross, hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "uppercut, cross, hook, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "low-hook, low-hook, high-hook, high-hook",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, hook, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, upper-cut, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, upper-cut, round-kick, rear-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "teep, cross, high-hook",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "teep, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, hook, cross, switch-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "cross, hook, spinning back-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "switch-kick, cross, hook",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "switch-kick, cross, lead-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "switch-kick, cross, hook, lead-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "switch-kick, cross, hook, rear-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "switch-kick, cross, hook, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "round-kick, rear-knee, round-kick",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "round-kick, round-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "lead-hook, cross",
        boxing: true,
        kickboxing: true,
        muaythai: true,
        mma: true
    },
    {
        combo: "lead-hook, cross, rear-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "lead-hook, cross, rear-elbow, lead-knee",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "lead-hook, lead-elbow",
        boxing: false,
        kickboxing: false,
        muaythai: true,
        mma: true
    },
    {
        combo: "lead-hook, cross, switch-kick",
        boxing: false,
        kickboxing: true,
        muaythai: true,
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