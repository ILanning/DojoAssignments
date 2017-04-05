var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  username : { type : String, required : true, maxlength : 20 },
  posts : [{ type : mongoose.Schema.Types.ObjectId, ref : "Post" }],
  comments : [{ type : mongoose.Schema.Types.ObjectId, ref : "Comment" }]
}, { timestamps : true });

mongoose.model("User", userSchema);
