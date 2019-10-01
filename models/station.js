const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StationSchema = new Schema({
  name: { type: String, required: true },
  address: { type: Number, required: true }
});

const Station = mongoose.model("Station", StationSchema);

module.exports = Station;
