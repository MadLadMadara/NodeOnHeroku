var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.end('Hello, world');

}).listen(8080);

console.log("Running on http://127.0.0.1:8080/");