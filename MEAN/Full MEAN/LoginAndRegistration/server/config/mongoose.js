var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");

mongoose.connect("mongodb://127.0.0.1/LoginAndRegistration");

var modelsPath = path.join(__dirname, "./../models");
fs.readdirSync(modelsPath).forEach(function(file){
  if(file.indexOf(".js") >= 0){
    require(path.join(modelsPath, file));
  }
});
