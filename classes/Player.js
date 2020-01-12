class Player {
  constructor(game, user, character) {
    this.client = user.client
    this.username = user.username
    this.tag = user.tag
    this.id = user.id
    this
  }
}

let characters = {
  mario: require("./Characters/Mario.js")
}