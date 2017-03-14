var controllers = require("../controllers/person");

module.exports = function(app){
  app.get('/', controllers.all);

  app.get("/:name", controllers.individual);

  app.get("/new/:name", controllers.create);

  app.get("/destroy/:name", controllers.destroy);
}
