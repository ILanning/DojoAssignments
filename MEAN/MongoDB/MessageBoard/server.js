var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded({ extended : true }));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", function(req, res){

});

app.post("/post", function)

server.listen(8000, function(){ console.log("Server listening"); });
