/**
 * game-model.js
 *
 * The game database model.
 * */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Game', new Schema({
	owner: String,
	participants: [{
		user: String,
		capital: Number,
		points: Number
	}],
	universe: {	// universe consists of planets
		planets: [{	// planets consists of islands
			islands: [{	// islands consists of tiles
				tiles: [{
					x: Number,
					y: Number,
					z: Number,
					type: String
				}]
			}]
		}]
	}
}));