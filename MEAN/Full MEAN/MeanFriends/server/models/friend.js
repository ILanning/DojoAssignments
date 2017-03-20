var mongoose = require("mongoose");

var friendSchema = new mongoose.Schema({
  firstName : String,
  lastName : String,
  birthday : Date
}, { timestamps : true });

mongoose.model("Friend", friendSchema);
