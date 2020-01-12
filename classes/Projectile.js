class Projectile {
  constructor(player, config = {}) {
    this.game = player.game
    this.owner = player
    this.damage = config.damage
    this.direction = config.direction.toLowerCase()
    this.speed = config.speed
    this.flinching = config.flinching
    this.x = player.x
    this.y = player.y
    
    this.interval = setInterval(() => {
      if (["right", "left"].includes(this.direction)) {
        this.x += this.direction == "right" ? 1 : -1
      } else {
        this.y += this.direction == "up" ? 1 : -1
      }
      
      if (this.game.offStage(this)) return this.destroy()
      
      let hitting = this.game.players.find(p => Math.round(p.character.x) == this.x && Math.round(p.character.y) == this.y)
      if (hitting) {
        hitting.character.damage(this.damage, this.flinching)
        this.destroy()
      }
    })
  }

  destroy() {
    clearInterval(this.interval)
    delete this
  }
}