var http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.end('Hello, world');

}).listen(PORT);




console.log("Running on http://127.0.0.1:8080/");