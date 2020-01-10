class Game {
  constructor(client, ...players) {
    this.client = client
    this.players = [...players]
    this.logs = []
    this.time = 0
  }
  
  loadScreen() {
    let blank = "<:blank:665229950265065483>"
    let screen = ""
    
    let x = -10
    let y = 10
    
    for (var i = 0; i < 100; i++) {
      let inplace = this.players.find(p => p.x == x && p.y == y)
      if (inplace) {
        let icon = inplace.emoji
        screen 
      }
    }
  }
}