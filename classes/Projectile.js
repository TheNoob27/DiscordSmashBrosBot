class Projectile {
  constructor(player, direction, speed) {
    this.game = player.game
    this.owner = player
    this.direction = direction
    this.speed = speed
    this.x = player.x
    this.interval = setInterval(() => {
      
    })
  }
}