class Character {
  constructor(client, character) {
    this.name = character.toLowerCase().charAt(0).toUpperCase() + character.toLowerCase().slice(1)
    this.x = 0
    this.y = 0
    this.helpless = false
    this.doublejumped = false
    this.icon = icons[this.name]
    this.emoji = "<:"+this.name.toLowerCase()+":"+this.icon+">"
  }
}

let icons = {
  Mario: "665103155230539776"
}