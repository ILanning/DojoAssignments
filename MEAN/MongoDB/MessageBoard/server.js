var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/MessageBoard");
var Schema = mongoose.Schema;
var postSchema = new Schema({
  name : {type : String, required : true, minlength : 4 },
  message : { type : String, required : true },
  comments : [{ type : Schema.Types.ObjectId, ref : "Comment" }]
}, { timestamps : true });
var commentSchema = new Schema({
  _post : { type : Schema.Types.ObjectId, ref : "Post" },
  name : {type : String, required : true, minlength : 4 },
  message : { type : String, required : true }
}, { timestamps : true });

mongoose.model("Post", postSchema);
mongoose.model("Comment", commentSchema);
var Post = mongoose.model("Post");
var Comment = mongoose.model("Comment");

app.get("/", function(req, res){ index(req, res, { errors : [] }); });

function index (req, res, context){
  Post.find({}).sort("-createdAt").populate({ path : "comments", options : { sort : "createdAt" } }).exec(function(err, posts){
    context.posts = posts;
    res.render("index.ejs", context);
  });
};

app.post("/reset", function(req, res){
  Post.remove({}, function(err){
    Comment.remove({}, function(err){
      res.redirect("/");
    });
  });
});

app.post("/post", function(req, res){
  var post = new Post({ name : req.body.name, message : req.body.message } );
  post.save(function(err){
    if(err){
      index(req, res, { errors : post.errors });
    }
    else {
      res.redirect("/");
    }
  })
});

app.post("/comment", function(req, res){
  var comment = new Comment({ name : req.body.name, message : req.body.message, _post : req.body.postID });
  comment.save(function(err){
    if(err){
      index(req, res, { errors : comment.errors });
    }
    else {
      Post.findById(req.body.postID, function(err, post){
        post.comments.push(comment._id);
        post.save(function(err){
          res.redirect("/");
        });
      });
    }
  })
});

app.listen(8000, function(){ console.log("Server listening"); });
