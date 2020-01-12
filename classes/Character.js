const shields = ["🔴", "🔵", "🟡", "🟢"]
const startingpos = [-3, -1, 1, 3]
class Character {
  constructor(game, character) {
    this.game = game
    this.name = character
    this.tag = "P"+(game.players.length + 1)
    
    this.x = startingpos[game.players.length] || 0
    this.y = 0
    this.facing = game.players.length >= 2 ? "left" : "right"
    
    this.helpless = false
    this.doublejumped = false
    this.shielding = false
    this.launching = false
    
    this.shield = shields[game.players.length]
    this.hp = 0
    this.shieldhp = 100
    
    return this
  }
  
  get offScreen() {
    return this.game.offScreen(this)
  }
  
  get onStage() {
    return Math.floor(this.y) == 0 && [-4, -3, -2, -1, 0, 1, 2, 3, 4].includes(Math.floor(this.x))
  }
  
  get inAir() {
    return !this.onStage
  }
  
  damage(dmg = 5, flinch = false) {
    if (this.shielding) {
      this.shieldhp -= dmg / 2
      if (this.shieldhp < 1) {
        this.game.log(this)
      }
    } else {
      this.hp += dmg
      if (flinch) {
        this.launching = false
      }
    }
  }
  
  toString() {
    return this.icon ? this.icon : this.tag
  }
  
  walk(direction) {
    
  }
}

module.exports = Character