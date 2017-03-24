var express = require("express");
var path = require("path");
var bp = require("body-parser");

var app = express();

app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./node_modules")));
app.use(bp.json());

app.listen(8000, function(){ console.log("Server listening"); });
