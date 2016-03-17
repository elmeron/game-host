/**
 * tile-model.js
 *
 * The tile database model.
 * */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Tile', new Schema({
	x: Number,
	y: Number,
	z: Number,
	type: String
}));