var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
  _user : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
  _post : { type : mongoose.Schema.Types.ObjectId, ref : "Post" },
  text : { type : String, required : true }
}, { timestamps : true });

mongoose.model("Comment", commentSchema);
