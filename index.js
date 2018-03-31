var express = require('express');
var app = express();

var favicon = require('express-favicon');

app.set('port', (process.env.PORT || 5000));

app.use("/images", express.static(__dirname + '/images')); 

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