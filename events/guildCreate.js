module.exports = async (client, guild) => {
const fs = require("fs")
let config = require("../config.json")
    guild.members.cache.forEach(member => {
          client.points.ensure(`${guild.id}-${member.id}`, {
          user: member.id,
          guild: member.guild.id,
          points: 0,
        });
    })
config[guild.id] = {}
config[guild.id].Levels =  false
config[guild.id].JoinLogger = true
config[guild.id].SkidVerification = true
config[guild.id].WelcomeChannel = ""
config[guild.id].ReportChannel = ""
config[guild.id].TestChannel = ""
config[guild.id].autoroles = []
config[guild.id].VerifiedRole = ""
config[guild.id].UnverifiedRole = ""
config[guild.id].EmbedColor = "0x00AE86"
config[guild.id].LevelRoles = {}
config[guild.id].LevelRoles.level1 = ""
config[guild.id].LevelRoles.level2 = ""
config[guild.id].LevelRoles.level3 = ""
fs.writeFileSync("/root/Downloads/0x41/config.json", JSON.stringify(config, null, 2));

}