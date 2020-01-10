class Character {
  constructor(client, character) {
    this.name = character.toLowerCase().charAt(0).toUpperCase() + character.toLowerCase().slice(1)
    this.x = 0
    this.y = 0
    this.helpless = false
    this.doublejumped = false
    this.icon = icons[this.name]
    this.emoji = "<:"+this.name.toLowerCase()+":"+this.icon+">"
    this.hp = 0
    
    return this
  }
  
  get onStage() {
    return Math.floor(this.y) == 0 && [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].includes(Math.floor(this.x))
  }
}

let icons = {
  Mario: "665103155230539776"
}