var path = require("path");
module.exports = {
  index : function(req, res){
    res.sendFile("index.html");
  },
  angular : function(req, res){
    res.render("../bower_components/angular/angular.js");
  }
}
