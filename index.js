var express = require('express');
var app = express();

var favicon = require('express-favicon');

app.set('port', (process.env.PORT || 5000));

app.use("/files", express.static(__dirname + '/files')); 
app.use("/images", express.static(__dirname + '/images')); 
app.use("/stylesheets", express.static(__dirname + '/stylesheets')); 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('index')
});

app.get('/secrets', function(request, response) {
	response.render('secrets')
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});