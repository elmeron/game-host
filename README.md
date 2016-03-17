# Game Host

This part of the back end structure of Elmeron is responsible for active games. It is the public API for all Elmeron 
Clients.

## API Documentation

### Universe
* `getTiles(island)` - Returns a list of all discovered tiles on the island
* `getIslands(planet)` - Returns a list of all discovered islands on the planet
* `getPlanets()` - Returns a list of all discovered planets in the universte

### Economy
* `getCapital(player)` - Returns the capital amount for the player
* `getPoints(player)` - Returns the game points the player has
* `getBluePrints(player)` - Returns all blueprints the player owns
* `getFactories(player)` - Returns all factories the player owns
* `buyTile(player, tile)` - Discovers a tile and change the ownership of it to player
* `rentTile(player, other, tile)` - Rents a tile from other
* `buildFactory(player, blueprint, tiles)` - Builds a factory from blueprint on tiles 