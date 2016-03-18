/**
 * game-handler.js
 *
 * Game Handler takes care of all client-to-game requests.
 * */


/**
 * Adds a new game to the database.
 *
 * @param {String} owner - The id of the player who initiated the creation
 * @param {function} cb - Callback with the game id and any errors
 */
exports.createGame = function(owner, cb) {
	// TODO: implement
};


/**
 * Ends a game and removes it from the database. All player related data is
 * stored in the player database.
 *
 * @param {String} game - The id of the game to end
 * @param {function} cb - Callback with any errors
 */
exports.endGame = function(game, cb) {
	// TODO: implement
};


/**
 * Adds a player to the list of game participants.
 *
 * @param {String} game - The game id
 * @param {String} player - The player id
 * @param {function} cb - Callback with any errors
 */
exports.joinGame = function(game, player, cb) {
	// TODO: implement
};


/**
 * Returns a list of all participants in the game.
 *
 * @param {String} game - The game id
 * @param {function} cb - Callback with any errors
 */
exports.getParticipants = function(game, cb) {
	// TODO: implement
};


/**
 * Returns a list of all discovered planets in the universe.
 *
 * @param {String} game - The game id
 * @param {function} cb - Callback with all planets
 */
exports.getPlanets = function(game, cb) {
	// TODO: implement
};


/**
 * Returns a list of all discovered islands on a planet.
 *
 * @param {String} game - The game id
 * @param {String} planet - The planet id
 * @param {function} cb - Callback with all islands
 */
exports.getIslands = function(game, planet, cb) {
	// TODO: implement
};


/**
 * Returns a list of all discovered tiles on an island.
 *
 * @param {String} game - The game id
 * @param {String} island - The island id
 * @param {function} cb - Callback with the tiles
 */
exports.getTiles = function(game, island, cb) {
	// TODO: implement
};


/**
 * Returns the capital amount for the player.
 *
 * @param {String} game - The game id
 * @param {String} player - The player id
 * @param {function} cb - Callback with the capital
 */
exports.getCapital = function(game, player, cb) {
	// TODO: implement
};


/**
 * Returns player's points.
 *
 * @param {String} game - The game id
 * @param {String} player - The player id
 * @param {function} cb - Callback with the points
 */
exports.getPoints = function(game, player, cb) {
	// TODO: implement
};


/**
 * Returns the player's blueprints.
 *
 * @param {String} game - The game id
 * @param {String} player - The player id
 * @param {function} cb - Callback with the blueprints
 */
exports.getBluePrints = function(game, player, cb) {
	// TODO: implement
};


/**
 * Returns all the player's factories.
 *
 * @param {String} game - The game id
 * @param {String} player - The player id
 * @param {function} cb - Callback with the factories
 */
exports.getFactories = function(game, player, cb) {
	// TODO: implement
};


/**
 * Discovers a tile and change the ownership of it to player
 *
 * @param {String} game - The game id
 * @param {String} player - The player id
 * @param {String} tile - The id of the tile
 * @param {function} cb - Callback with any errors
 */
exports.buyTile = function(game, player, tile, cb) {
	// TODO: implement
};


/**
 * Rents a tile from another player
 *
 * @param {String} game - The game id
 * @param {String} player - The player who wants to rent
 * @param {String} other - The player to rent from
 * @param {String} tile - The id of the tile
 * @param {function} cb - Callback with any errors
 */
exports.rentTile = function(game, player, other, tile, cb) {
	// TODO: implement
};


/**
 * Builds a factory from a blueprint on tiles.
 *
 * @param {String} game - The game id
 * @param {String} player - The player who wants to build a factory
 * @param {String} blueprint - The blueprint to build from
 * @param {Array} tiles - A list of tile ids
 * @param {function} cb - Callback with any errors
 */
exports.buildFactory = function(game, player, blueprint, tiles, cb) {
	// TODO: implement
};


module.exports = exports;

