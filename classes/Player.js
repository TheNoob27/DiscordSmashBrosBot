class Player {
  constructor(game, user, character) {
    this.game = game
    this.client = user.client
    this.user = user
    this.username = user.username
    this.tag = user.tag
    this.id = user.id
    this.character = new characters[character.toLowerCase()](this.game)
  }
  
  get x() {
    return this.character.x
  }
  
  get y() {
    return this.character.y
  }
}

let characters = {
  mario: require("./Characters/Mario.js")
}

module.exports = Player