var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/BasicMongoose");

app.get('/', function(req, res){
  res.render("index");
});

app.get("/users", function(req, res){
  res.redirect('/');
});

app.post("/users", function(req, res){
  console.log("Post", req.body);

  var user = User({ name : req.body.name, age : req.body.age });
  user.save(function(err){
    if(err){
      console.log("An error occurred:", err);
    }
    else {
      console.log(`User ${req.body.name} successfully added.`);
      res.redirect('/');
    }
  });
});

var UserSchema = new mongoose.Schema({
  name : String,
  age : Number
});
mogoose.model("User", UserSchema);
var User = mongoose.model("User");

app.listen(8000, function(){ console.log("Listtening on 8000"); });
