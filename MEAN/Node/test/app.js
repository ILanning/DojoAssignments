var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
  console.log(request.url);

  if (request.url === '/' ){
    fs.readFile("pages/index.html", "utf8",function(errors, contents){
      response.writeHead(200, { "Content-Type" : "text/html" });
      response.write(contents);
      response.end();
    });
  }
  else if ( request.url === "/dojo" ){
    fs.readFile("pages/dojo.html", "utf8", function(errors, contents){
      response.writeHead(200, { "Content-Type" : "text/html" });
      response.write(contents);
      response.end();
    });
  }
  else if ( request.url === "/stylesheets/style.css" ){
    fs.readFile("css/style.css", "utf8", function(errors, contents){
      response.writeHead(200, { "Content-Type" : "text/css" });
      response.write(contents);
      response.end();
    });
  }
  else{
    response.end("File not Found");
  }
});

server.listen(6789);
console.log("Running on 6789");
