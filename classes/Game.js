class Game {
  constructor(client, ...players) {
    this.client = client
    this.players = [...players]
    this.logs = []
    this.time = 0
  }
  
  loadScreen() {
    let stage = ":stage_0_0::stage_1_0::stage_2_0::stage_3_0::stage_4_0::stage_5_0::stage_6_0::stage_7_0:\n:stage_0_1::stage_1_1::stage_2_1::stage_3_1::stage_4_1::stage_5_1::stage_6_1::stage_7_1:\n:stage_0_2::stage_1_2::stage_2_2::stage_3_2::stage_4_2::stage_5_2::stage_6_2::stage_7_2:"
    let blank = "<:blank:665229950265065483>"
    let screen = ""
    let x = -8
    let y = 8
    
    for (var i = 0; i < 130; i++) {
      let inplace = this.players.find(p => Math.round(p.x) == x && Math.round(p.y) == y)
      if (inplace) {
        screen += inplace.icon
      } else {
        screen += blank
      }
      
      y = x == 8 ? y - 1 : y
      x = x == 8 ? -8 : x + 1
      
      if (y == -1 && x == -8) {
          screen += stage
          break;
        }
    }
    
    
    /*
    let x = -10
    let y = 10
    
    for (var i = 0; i < 300; i++) {
      let inplace = this.players.find(p => p.x == x && p.y == y)
      if (inplace) {
        let icon = inplace.emoji
        screen += icon
      } else {
        if (y == -1 && x == -5) {
          screen += "--"
        }
        screen += blank
      }
      
      if (x == 10 && y == -10) break;
      
      y = x == 10 ? y - 1 : y
      x = x == 10 ? -10 : x + 1
    }
    
    return screen
    */
  }
}