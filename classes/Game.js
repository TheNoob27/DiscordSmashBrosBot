class Game {
  constructor(client) {
    this.client = client
    this.players = []
    this.playerlist = []
    this.logs = []
    this.time = 0
  }
  
  addPlayer(player) {
    this.players.push(player)
    this.playerlist.push(player.id)
    return player
  }
  
  log(text) {
    this.logs.push(text)
    if (this.logs.length > 5) this.logs.splice(0, 1)
    return text
  }
  
  loadScreen() {
    let stage = "<:s_0_0:665537680637165587><:s_1_0:665537828884578345><:s_2_0:665537842931302421><:s_3_0:665538027283808257><:s_4_0:665538049337458719><:s_5_0:665538066160680971><:s_6_0:665538082866462752><:s_7_0:665538120091172874>\n<:s_0_1:665538142320984064><:s_1_1:665538160230400000><:s_2_1:665538174281580589><:s_3_1:665538201309413376><:s_4_1:665538231357538325><:s_5_1:665538260864466973><:s_6_1:665538282351755290><:s_7_1:665538301469392907>\n<:s_0_2:665538313502982185><:s_1_2:665538327457431582><:stage_2_2:665538340627677214><:stage_3_2:665538359145267200><:stage_4_2:665538441781444618><:stage_5_2:665538461029236736>"//"<:stage_6_2:665538625676509194><:stage_7_2:665538645070970890>"
    let blank = "<:b_:665229950265065483>"
    let screen = ""
    let x = -4
    let y = 5
    
    for (var i = 0; i < 70; i++) {
      let inplace = this.players.find(p => Math.round(p.x) == x && Math.round(p.y) == y)
      if (inplace) {
        screen += inplace.character.icon
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
  
  offScreen(obj) {
    return (obj.x >= -4 && obj.x <= 4) && (obj.y >= -3 && obj.y <= 6)
  }
}

module.exports = Game