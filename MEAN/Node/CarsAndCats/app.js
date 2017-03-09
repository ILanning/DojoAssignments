var http = require("http");
var fs = require("fs");

var imageRegex = /images\/.*/;
var jpgRegex = /\.jp+g$/;
var pngRegex = /\.png$/;

var server = http.createServer(function(request, response){
  if(request.url === '/'){
    response.writeHead(302, { "location" : "/cars" });
    response.end();
  }
  else if (request.url === "/cars"){
    fs.readFile("views/cars.html", "utf8", function(errors, contents){
      response.writeHead(200, { "Content-Type" : "text/html" });
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === "/cars/new"){
    fs.readFile("views/newCar.html", "utf8", function(errors, contents){
      response.writeHead(200, { "Content-Type" : "text/html" });
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === "/cats"){
    fs.readFile("views/cats.html", "utf8", function(errors, contents){
      response.writeHead(200, { "Content-Type" : "text/html" });
      response.write(contents);
      response.end();
    });
  }
  else if (imageRegex.test(request.url)){
    fs.readFile("view/cars.html", "utf8", function(errors, contents){
      if(jpgRegex.test(request.url))
        response.writeHead(200, { "Content-Type" : "image/jpg" });
      else if(pngRegex.test(request.url))
        response.writeHead(200, { "Content-Type" : "image/png" });
      response.write(contents);
      response.end();
    });
  }
});
server.listen(6789);
