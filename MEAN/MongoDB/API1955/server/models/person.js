var mongoose = require("mongoose");

var personSchema = new mongoose.Schema({
  name : String
});

mongoose.model("Person", personSchema);
