var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  _user : { type : mongoose.Schema.Types.ObjectId, ref : "User"  },
  text : { type : String, required : true },
  comments : [{ type : mongoose.Schema.Types.ObjectId, ref : "Comment" }]
}, { timestamps : true });

mongoose.model("Post", postSchema);
