class Game {
  constructor(client, players = []) {
    this.client = client
    this.players = players
    this.playerlist = players.map(p => p.id)
    this.logs = []
    this.time = 0
  }
  
  loadScreen() {
    let stage = ":stage_0_0::stage_1_0::stage_2_0::stage_3_0::stage_4_0::stage_5_0::stage_6_0::stage_7_0:\n:stage_0_1::stage_1_1::stage_2_1::stage_3_1::stage_4_1::stage_5_1::stage_6_1::stage_7_1:\n:stage_0_2::stage_1_2::stage_2_2::stage_3_2::stage_4_2::stage_5_2::stage_6_2::stage_7_2:"
    let blank = "<:blank:665229950265065483>"
    let screen = ""
    let x = -4
    let y = 6
    
    for (var i = 0; i < 70; i++) {
      let inplace = this.players.find(p => Math.round(p.x) == x && Math.round(p.y) == y)
      if (inplace) {
        screen += inplace.icon
      } else {
        screen += blank
      }
      if (x == 4) screen += "\n"
      y = x == 4 ? y - 1 : y
      x = x == 4 ? -4 : x + 1
      
      if (y == -1 && x == -4) {
          screen += stage
          break;
        }
    }
    
    return screen
  }
}