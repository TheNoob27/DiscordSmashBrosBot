//*
let Player = require("./classes/Player.js")
let Game = require("./classes/Game.js")
let Projectile = require("./classes/Projectile.js")
console.log("oof")
let user = {username: "hi", tag: "hi#3833", id: "123456789012345678", client: null}
let game = new Game()
game.addPlayer(new Player(game, user, "Mario"))
game.players[0].character.damage(339)
let p = new Projectile(game.players[0], {direction: ""})

//console.log(game.players)
console.log(p.destroy())
//*/
