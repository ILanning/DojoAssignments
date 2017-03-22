var users = require("./../controllers/users.js")

module.exports = function(app){
  // app.get(":id/users", users.show);
  app.post("/users", users.create);
  app.post("/users/login", users.login);
  // app.get("users", users.index);
  // app.delete(":id/users", users.delete);
  // app.put(":id/users", users.update);
}
