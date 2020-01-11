const Character = require("../Character.js")

class Mario extends Character {
  constructor(game) {
    super(game, "Mario")
    
    this.icon = "<:mario:665103155230539776>"
    this.weight = 1
  }
  
}