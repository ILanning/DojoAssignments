var express = require("express");

var app = express();

app.get('/', function(request, response){
  response.send("Text!");
});

app.listen(8000);
