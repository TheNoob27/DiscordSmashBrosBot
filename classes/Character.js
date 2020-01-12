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
    this.brokenshield = false
    this.dead = false
    
    this.shield = shields[game.players.length]
    this.hp = 0
    this.shieldhp = 100
    
    this.intervals = []

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
  
  breakShield() {
    if (this.shielding) this.shielding = false
    
    this.game.log(this.player.tag + "'s shield broke! They are stunned!")
    this.brokenshield = true
    this.shieldhp = 100
    setTimeout(() => {
      if (!this.brokenshield) return;
      this.game.log(this.player.tag + " can move again!")
      this.brokenshield = false
    }, this.hp * 250)
  }
  
  clearIntervals() {
    this.intervals.forEach(i => clearInterval(i.interval))
    this.intervals = []
  }
  
  damage(dmg = 5, flinch = false) {
    if (this.shielding) {
      this.shieldhp -= dmg / 2
      if (this.shieldhp < 1) {
        this.shielding = false
        
        this.breakShield()
      }
    } else {
      this.hp += dmg
      if (flinch) {
        this.launching = false
        this.helpless = false
      }
    }
  }
  
  fall() {
    let int = setInterval(() => {
      if (this.launching || Math.ceil(this.y) < 1 || !this.inAir) return;
      
      let inplace = this.game.players.find(p => Math.round(p.x) == Math.round(this.x) && Math.round(p.y) == Math.round(this.y) - 1)
      if (inplace) return this.x -= Math.round((Math.random() * 2) - 1) || -1
      
      this.y -= 1
      if (Math.round(this.y) == -1) this.y = 0
    }, this.weight * 1000)
    
    this.intervals.push({id: "fall", interval: int})
  }
  
  regenShield() {
    let int = setInterval(() => {
      if (this.brokenshield) return;
      if (this.shieldhp == 100 && !this.shielding) return;
      
      if (this.shielding) {
        this.shieldhp -= 5
        if (this.shieldhp < 1) {
          this.breakShield()
        }
      } else {
        this.shieldhp += 5
        if (this.shieldhp > 100) this.shieldhp = 100
        
      }
    }, 1000)
    this.intervals.push({id: "shieldregen", interval: int})
  }
  
  toggleShield() {
    this.shielding = !this.shielding
    this.game.log(this.player.tag + " " +(this.shielding ? "pulled up" : "released") +" their shield.")
  }
  
  toString() {
    return this.icon ? this.icon : this.tag
  }
  
  walk(direction) {
    direction = direction.toLowerCase()
    
    if (["left", "right"].includes(direction)) return;  
    if (this.facing !== direction) this.facing = direction
    
    let inplace = this.game.players.find(p => Math.round(p.y) == Math.round(this.y) && Math.round(p.y) == Math.round(this.x) + (direction == "left" ? -this.speed : this.speed))
    if (inplace) return;
    
    this.x += direction == "left" ? -this.speed : this.speed
  }
  
}

module.exports = Character