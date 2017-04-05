var users = require("./../controllers/users.js");
var posts = require("./../controllers/posts.js");
var comments = require("./../controllers/comments.js");

module.exports = function(app){
  app.post("/users/login", users.login);
  app.post("/users/logout", users.logout);
  app.post("/users/check", users.check);
  app.post("/posts", posts.create);
  app.get("/posts", posts.index);
  app.post("/comments", comments.create);
}
