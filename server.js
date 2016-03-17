/**
 * server.js
 *
 * The Game Host server.
 * */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');

var api = require('./routes/api');

var port = process.argv[2] || process.env.PORT || 3000;

// database initialization
mongoose.connect(config.database);

// on successful connection
mongoose.connection.on('connected', function() {
	console.log('database connected to url: ' + config.database);
});

// on connection error
mongoose.connection.on('error', function(err) {
	throw err;
});

// when disconnected
mongoose.connection.on('disconnected', function() {
	console.log('database disconnected');
});

// if the Node process ends
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('database closed through node');
		process.exit(0);
	});
});

// parse POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// pretty console output
app.use(morgan('dev'));

// api routes
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send({
		message: err.message,
		error: err
	});
});

app.listen(port);