var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express();
app.use(bodyParser.urlencoded( { extended : true } ));
app.use(express.static(path.join(__dirname, "./client/static")));
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");

require("./server/config/mongoose.js");
require(path.join(__dirname, "./server/config/routes"))(app);

app.listen(8000, function(){ console.log("Server listening"); });