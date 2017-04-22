var express = require("express");
var path = require("path");
//var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);

app.listen(8000, function(){ console.log("Server listening") });
