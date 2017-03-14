var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded( { extended : true } ));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/MongooseDashboard");

app.get('/', function(req, res){
  let data = Animal.find({}, function(err, animals){
    if(err)
      console.log(err);
    res.render("index", {"animals" : animals });
  });
});

app.get("/animals/new", function(req, res){
  res.render("new");
});

app.post("/animals", function(req, res){
    let newAnimal = new Animal();
    newAnimal.name = req.body.name;
    newAnimal.color = req.body.color;
    newAnimal.save(function(err){
      console.log(err);
    });
    res.redirect('/');
});

app.get("/animals/edit/:id", function(req, res){
  Animal.findById(req.params.id, function(err, animal){
    if(err)
      console.log(err);
    res.render("animal", animal);
  });

});

app.post("/animals/:id", function(req, res){
  Animal.findById(req.params.id, function(err, animal){
    animal.name = req.body.name;
    animal.color = req.body.color;
    animal.save();
    res.redirect(`/animals/${req.params.id}`);
  });
});

app.post("/animals/destroy/:id", function(req, res){
  Animal.remove({ _id : req.body.id }, function(err){
    console.log(err);
    res.redirect('/');
  });
});

var animalSchema = new mongoose.Schema({
  name : String,
  color : String
});

mongoose.model("Animal", animalSchema);
var Animal = mongoose.model("Animal");

app.listen(8000, function(){ console.log("Server listening"); });
