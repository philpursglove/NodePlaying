var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><head><title>Node.js for fun and profit</title></head><body>Hello World</body></html>');
}).listen(port);