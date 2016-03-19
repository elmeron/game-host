/**
 * config.js
 *
 * Configuration parameters for the server.
 * */

module.exports = {

	// TODO: should this secret be this exposed?
	'secret': 'superdupersecretsecret',
	'database': 'mongodb://localhost:27017/games',
	'testDatabase': 'mongodb://localhost:27017/gametests'

};