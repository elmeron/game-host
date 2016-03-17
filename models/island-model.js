/**
 * island-model.js
 *
 * The island database model.
 * */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Tile = require('./tile-model');

module.exports = mongoose.model('Island', new Schema({
	tiles: [Tile]
}));