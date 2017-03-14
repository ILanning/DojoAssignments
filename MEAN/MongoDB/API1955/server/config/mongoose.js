var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

mongoose.connect("localhost", "API1955");
var modelsPath = path.join(__dirname, "./../models");

fs.readdirSync(modelsPath).forEach(function(file){
  if(file.indexOf(".js") >= 0)
    require(path.join(modelsPath, file));
});
