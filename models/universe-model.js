/**
 * universe-model.js
 *
 * The universe database model.
 * */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Planet = require('./Planet');

module.exports = mongoose.model('Universe', new Schema({
	planets: [Planet]
}));