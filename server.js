var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/', function(req, res)
{
    res.send('<html><head><title>Node.js for fun and profit</title></head><body><h2>Node.js is server-side Javascript</h2><form method="post" action="/FormPost">Please enter your name:<br/><input type="text" id="NameTextBox" name="NameTextBox"/><input type="Submit"></form></body></html>');
});

app.post('/FormPost', function(req, res)
{
    res.send('<html><head><title>Node.js for fun and profit</title></head><body><h2>Node.js is server-side Javascript</h2>Hello, ' + req.body.NameTextBox + '<br/>I am generated by Node.js, which is server-side Javascript.<br/><a href="/">Go again.</a></body></html>');
});
app.listen(process.env.port || 1337);