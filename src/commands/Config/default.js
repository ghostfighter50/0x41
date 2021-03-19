const fs = require('fs')
const Discord = require('discord.js')

module.exports = {
  name: 'default',
  description: "resets the server's settings",
  aliases: ['def'],
  usage: 'sudo default',
  type: 'config',
  admin: true,

  async run (client, message, args) {
    const config = require('../../../serverconfig.json')

    const errorembed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle('❌ Error')
      .setColor(client.serverconfig[message.guild.id].EmbedColor)

    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setColor(client.serverconfig[message.guild.id].EmbedColor)
      .setTitle('✅ Succesfully set settings to default !')

    try {
      config[message.guild.id] = {}
      config[message.guild.id].JoinMessage = 'Welcome {user} to {guild}'
      config[message.guild.id].LeaveMessage = ':x: {user} left...'
      config[message.guild.id].RaidMode = false
      config[message.guild.id].Levels = false
      config[message.guild.id].JoinLogger = true
      config[message.guild.id].SkidVerification = false
      config[message.guild.id].WelcomeChannel = ''
      config[message.guild.id].ReportChannel = ''
      config[message.guild.id].TestChannel = ''
      config[message.guild.id].autoroles = []
      config[message.guild.id].VerifiedRole = ''
      config[message.guild.id].UnverifiedRole = ''
      config[message.guild.id].EmbedColor = '0x00AE86'
      config[message.guild.id].LevelRoles = {}
      config[message.guild.id].LevelRoles.level1 = ''
      config[message.guild.id].LevelRoles.level2 = ''
      config[message.guild.id].LevelRoles.level3 = ''
      config[message.guild.id].Flags = [{}]
      fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2))

      message.channel.send(embed)
    } catch (e) {
      console.log(e)
      message.channel.send(errorembed)
    }
  }
}
