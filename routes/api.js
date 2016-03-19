/**
 * api.js
 *
 * Elmeron Game Host API
 * */

var express = require('express');
var router = express.Router();
var assert = require('assert');
var GameHandler = require('../lib/game-handler');


// verify host token
router.use(function(req, res, next) {
	// TODO: implement
	next();
});


router.get('/', function(req, res) {
	res.send({
		message: "Elmeron Game Host API"
	});
});


router.post('/createGame', function(req, res, next) {
	var owner = req.body.owner || null;

	GameHandler.createGame(owner, function(err, id) {
		if (err) throw err;
		res.send({
			success: true,
			id: id
		});
	});
});


module.exports = router;