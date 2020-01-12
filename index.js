let Player = require("./classes/Player.js")
let Game = require("./classes/Game.js")

console.log("oof")
let user = {username: "hi", tag: "hi#3833", id: "123456789012345678", client: null}
let game = new Game()
game.addPlayer(new Player(game, user, "Mario"))

//console.log(game.loadScreen().length)
