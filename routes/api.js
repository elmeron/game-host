/**
 * api.js
 *
 * Elmeron Game Host API
 * */

var express = require('express');
var router = express.Router();


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





module.exports = router;