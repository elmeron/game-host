/**
 * participant-model.js
 *
 * The participant database model.
 * */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Participant', new Schema({
	user: String,
	capital: Number,
	points: Number
}));