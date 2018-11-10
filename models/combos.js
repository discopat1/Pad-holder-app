const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comboListSchema = new Schema({
  combo: { type: String, required: true },
  boxing: { type: Boolean, required: true },
  kickboxing: { type: Boolean, required: true },
  mma: { type: Boolean, required: true }
});



const ComboList = mongoose.model("ComboList", comboListSchema);

module.exports = ComboList;