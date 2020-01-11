class Character {
  constructor(game, character) {
    this.game = game
    this.name = character
    this.x = 0
    this.y = 0
    this.helpless = false
    this.doublejumped = false
    this.hp = 0
    this.shieldhp = 0
    
    return this
  }
  
  get onStage() {
    return Math.floor(this.y) == 0 && [-8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8].includes(Math.floor(this.x))
  }
  
  get inAir() {
    return !this.onStage
  }
}
