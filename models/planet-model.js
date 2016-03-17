/**
 * planet-model.js
 *
 * The planet database model.
 * */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Island = require('./island-model');

module.exports = mongoose.model('Planet', new Schema({
	islands: [Island]
}));