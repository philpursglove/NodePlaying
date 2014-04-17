var express = require('express');
var app = express();

// Set some express config up
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.logger('dev'));
app.set('views', __dirname + '/views');

app.get('/', function(req, res)
{
    res.render('layout');
});

app.post('/FormPost', function(req, res)
{
    res.render('result', { 'name': req.body.NameTextBox });
});
app.listen(process.env.port || 1337);