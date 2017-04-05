var express = require("express");
var path = require("path");
var bp = require("body-parser");

var app = express();
app.use(express.static(path.join(__dirname, "./bower_components")));
app.use(express.static(path.join(__dirname, "./client")));
app.use(bp.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function(){ console.log("Server listening") });
