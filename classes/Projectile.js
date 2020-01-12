class Projectile {
  constructor(player, config = {}) {
    this.game = player.game
    this.owner = player
    this.damage = config.damage || 5
    this.direction = config.direction.toLowerCase()
    this.speed = config.speed || 1
    this.flinching = config.flinching
    this.x = config.x || player.x
    this.y = config.y || player.y
    
    this.interval = setInterval(() => {
      if (["right", "left"].includes(this.direction)) {
        this.x += this.direction == "right" ? 1 : -1
      } else {
        this.y += this.direction == "up" ? 1 : -1
      }
      
      if (this.game.offScreen(this)) return this.destroy()
      
      let hitting = this.game.players.find(p => Math.round(p.character.x) == this.x && Math.round(p.character.y) == this.y && p.id !== this.owner.id)
      if (hitting) {
        this.game.log(hitting.tag + " got hit with a " + (this.icon || "projectile") + " from "+this.owner.tag)
        hitting.character.damage(this.damage, this.flinching)
        this.destroy()
      }
    }, this.speed * 1000)
  }

  destroy() {
    clearInterval(this.interval)
    delete this
    return this
  }
}

module.exports = Projectile