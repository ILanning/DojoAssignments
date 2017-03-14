var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/QoutingDojo");

app.get('/', function(req, res){
  res.render("index");
});

app.post("/quotes", function(req, res){
  let result = new Quote();
  result.owner = req.body.owner;
  result.text = req.body.text;
  result.likes = 0;
  result.save();
  res.redirect('/quotes');
});

app.get("/quotes", function(req, res){
  Quote.find({}).sort({ likes : -1 }).exec(function(err, data){
    res.render("quotes", { "quotes" : data });
  });
});

app.post("/like", function(req, res){
  Quote.findById(req.body.id, function(err, quote){
    quote.likes++;
    quote.save();
    res.redirect("/quotes");
  });
});

var quoteSchema = new mongoose.Schema({
  owner : String,
  text : String,
  likes : Number
}, { timestamps : true });
mongoose.model("Quote", quoteSchema);
var Quote = mongoose.model("Quote");

app.listen(8000, function(){ console.log("Server listening"); });
