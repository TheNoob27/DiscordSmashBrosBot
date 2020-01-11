const shields = ["🔴", "🔵", "🟡", "🟢"]
const startingpos = [-3, -1, 1, 3]
class Character {
  constructor(game, character) {
    this.game = game
    this.name = character
    this.tag = "P"+game.players.length + 1
    this.x = startingpos[game.players.length] || 0
    this.y = 0
    this.helpless = false
    this.doublejumped = false
    this.hp = 0
    this.shield = shields[game.players.length]
    this.shieldhp = 100
    
    return this
  }
  
  get onStage() {
    return Math.floor(this.y) == 0 && [-4, -3, -2, -1, 0, 1, 2, 3, 4].includes(Math.floor(this.x))
  }
  
  get inAir() {
    return !this.onStage
  }
  
  toString() {
    return this.icon ? this.icon : this.tag
  }
}
