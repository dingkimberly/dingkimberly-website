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

app.get('/', function(request, response) {
	response.render('index')
});

app.get('/button', function(request, response) {
	response.render('button')
});

app.get('/secrets', function(request, response) {
	response.render('secrets')
});

app.get('/todolist', function(request, response) {
	response.render('todolist')
});

/*-----------------------------------------------------------------*/

// Connect to Postgres

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

/*-----------------------------------------------------------------*/

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});