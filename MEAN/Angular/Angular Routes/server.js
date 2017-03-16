var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname, "./client/static")));

require("./server/config/routes.js")(app);

app.listen(8000, function(){ console.log("Server listening"); });
