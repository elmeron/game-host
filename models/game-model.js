/**
 * game-model.js
 *
 * The game database model.
 * */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Universe = require('./universe-model');

module.exports = mongoose.model('Game', new Schema({
	owner: String,
	participants: [String],
	universe: Universe
}));