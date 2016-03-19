var mongoose = require('mongoose');
var config = require('../config');
var GameHandler = require('../lib/game-handler');

var db;

module.exports = {

	setUp: function(callback) {
		try {
			//db.connection.on('open', function() {
			mongoose.connection.on('open', function() {
				console.log('Opened connection');
				callback();
			});

			db = mongoose.connect(config.testDatabase);
			console.log('Started connection, waiting for it to open');
		}

		catch (err) {
			console.log('Setting up failed:', err.message);
		}
	},

	tearDown: function(callback) {
		console.log('In tearDown');
		try {
			console.log('Closing connection');
			db.disconnect();
			callback();
		}

		catch (err) {
			console.log('Tearing down failed:', err.message);
		}
	},

	createGameGoodArguments: function(test) {
		test.doesNotThrow(function() {
			GameHandler.createGame('123', function(err, id) {});
		}, Error, 'correct arguments should not throw error');

		test.done();
	},

	createGameBadArguments: function(test) {
		test.throws(function() {
			GameHandler.createGame();
		}, Error, 'no arguments should fail');

		test.throws(function() {
			GameHandler.createGame('123');
		}, Error, 'only one argument should fail');

		test.throws(function() {
			GameHandler.createGame(function(err, id){

			});
		}, Error, 'only callback should fail');

		test.done();
	}

	/*createGameNoError: function(test) {
		GameHandler.createGame('12345', function(err, id) {
			test.ifError(err, 'should pass');
			test.done();
		});
	}*/
};