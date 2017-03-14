var controllers = require("../controllers/animals.js");

module.exports = function(app){
  app.get('/', controllers.index);

  app.get("/animals/new", controllers.displayCreate);

  app.post("/animals", controllers.create);

  app.get("/animals/edit/:id", controllers.displayEdit);

  app.post("/animals/:id", controllers.edit);

  app.post("/animals/destroy/:id", controllers.destroy);
};
