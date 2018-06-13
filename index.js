var express = require('express');
var app = express();

/*-----------------------------------------------------------------*/

app.set('port', (process.env.PORT || 5000));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*-----------------------------------------------------------------*/

app.use("/files", express.static(__dirname + '/files')); 
app.use("/images", express.static(__dirname + '/images')); 
app.use("/stylesheets", express.static(__dirname + '/stylesheets')); 

/*-----------------------------------------------------------------*/

app.get('/', function(req, res) {
	res.render('index')
});

app.get('/button', function(req, res) {
	res.render('button')
});

app.get('/secrets', function(req, res) {
	res.render('secrets')
});

app.get('/todolist', function(req, res) {
	res.render('todolist')
});

app.get('/writing/:id', function(req, res) {
	var id = "writing-" + req.params.id
	res.render(id)
});

/*-----------------------------------------------------------------*/

// Server stuff goes here. 

/*-----------------------------------------------------------------*/

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});