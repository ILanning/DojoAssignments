var mongoose = require("mongoose");

var animalSchema = new mongoose.Schema({
  name : String,
  color : String
});

mongoose.model("Animal", animalSchema);
