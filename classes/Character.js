class Character {
  constructor(client, character) {
    this.name = character.toLowerCase().charAt(0).toUpperCase() + character.toLowerCase().slice(1)
    this.x = 0
    this.y = 0
    this.helpless = false
    this.doublejumped = false
    this.icon
  }
}