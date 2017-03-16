var controllers = require("../controllers/files.js");

module.exports = function(app){
  app.get("/", controllers.index);
  app.get(/^*angular.js$/, controllers.angular);
}
