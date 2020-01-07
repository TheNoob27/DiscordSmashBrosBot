const { Client, Collection } = require("discord.js")
const { table } = require("quick.db")

class Kahoot extends Client {
  constructor() {
  super({
      disabledEvents: [
//      "READY",
//      "RESUMED",
        "GUILD_SYNC",
//      "GUILD_CREATE",
//      "GUILD_DELETE",
        "GUILD_UPDATE",
//      "GUILD_MEMBER_ADD",
        "GUILD_MEMBER_REMOVE",
        "GUILD_MEMBER_UPDATE",
        "GUILD_MEMBERS_CHUNK",
        "GUILD_INTEGRATIONS_UPDATE",
        "GUILD_ROLE_CREATE",
        "GUILD_ROLE_DELETE",
        "GUILD_ROLE_UPDATE",
        "GUILD_BAN_ADD",
        "GUILD_BAN_REMOVE",
//      "CHANNEL_CREATE",
        "CHANNEL_DELETE",
        "CHANNEL_UPDATE",
        "CHANNEL_PINS_UPDATE",
//      "MESSAGE_CREATE",
//      "MESSAGE_DELETE",
//      "MESSAGE_UPDATE",
//      "MESSAGE_DELETE_BULK",
//      "MESSAGE_REACTION_ADD",
//      "MESSAGE_REACTION_REMOVE",
        "MESSAGE_REACTION_REMOVE_ALL",
        "USER_UPDATE",
        "USER_NOTE_UPDATE",
        "USER_SETTINGS_UPDATE",
        "PRESENCE_UPDATE",
        "VOICE_STATE_UPDATE",
        "TYPING_START",
        "VOICE_SERVER_UPDATE",
        "RELATIONSHIP_ADD",
        "RELATIONSHIP_REMOVE",
        "WEBHOOKS_UPDATE"
      ]
    })
    
    this.commands = new Collection()
    this.aliases = new Collection()
    this.games = new Collection()
    
    this.db = new table("Data")
  }
  
  get owner() {
    return this.users.get("342421078066593803") || {
      id: '342421078066593803',
      username: 'TheNoob27',
      discriminator: '6815',
      tag: "TheNoob27#6815",
      avatar: 'e28bbf218b6fed1e4ec9706b98370a3d',
      bot: false,
    }
  }
  
  get userCount() {
    return this.guilds.reduce((prev, acc) => acc.memberCount + prev, 0)
  }
}