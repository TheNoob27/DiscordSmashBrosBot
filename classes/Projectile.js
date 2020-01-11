class Projectile {
  constructor(player, direction, speed) {
    this.game = player.game
    this.owner = player
    this.direction = direction.toLowerCase()
    this.speed = speed
    this.x = player.x
    this.y = player.y
    this.interval = setInterval(() => {
      if (["right", "left"].includes(this.direction)) {
        
      }
    })
  }
  
  destroy() {
    clearInterval(this.interval)
    delete this
  }
}