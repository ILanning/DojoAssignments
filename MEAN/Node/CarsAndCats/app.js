var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
  if(request.url === '/'){

  }
  else if (request.url === "/cars"){
    fs.readFile("view/cars.html", "utf8", function(errors, contents){
      
    })
  }
  else if (request.url === "/cars/new"){

  }
  else if (request.url === "/cats"){

  }
});
