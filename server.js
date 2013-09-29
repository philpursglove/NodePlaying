var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res)
{
    res.send('<html><head><title>Node.js for fun and profit</title></head><body><h2>Node.js is server-side Javascript</h2></body></html>');
});

app.listen(1337);