var mongoose = require("mongoose");

var friendSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  birthday : Date
});

mongoose.model("Friend", friendSchema);
