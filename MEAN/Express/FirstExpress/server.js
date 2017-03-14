var express = require("express");
var path = require("path");

var app = express();

var PORT = 5000;

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));

app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

app.get('/', function(request, response){
  response.render("index");
});

app.listen(PORT, function(){ console.log("Listening on port " + PORT); });
