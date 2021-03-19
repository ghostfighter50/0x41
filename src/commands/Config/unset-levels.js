const fs = require('fs')
const Discord = require('discord.js')

module.exports = {
  name: 'unset-levels',
  description: 'unsets the levels module',
  aliases: ['un-lvl'],
  usage: 'sudo unset-levels',
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
      .setTitle('✅ Succesfully unset levels !')

    try {
      config[message.guild.id].Levels = false
      config[message.guild.id].LevelRoles = {}
      fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2))

      message.channel.send(embed)
    } catch (e) {
      console.log(e)
      message.channel.send(errorembed)
    }
  }
}
