var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

mongoose.connect("mongodb://localhost/MongooseDashboard");
var modelsPath = path.join(__dirname, "./../models");

fs.readdirSync(modelsPath).forEach(function(file){
  if(file.indexOf(".js") >= 0){
    require(path.join(modelsPath, file));
  }
});
