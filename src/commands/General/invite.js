module.exports = {
  name: 'invite',
  description: 'get the invite link',
  aliases: ['inv'],
  usage: 'sudo invite',
  type: 'gen',
  admin: false,
  async run (client, message, args) {
    const Discord = require('discord.js')
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle('Invite Me !')
      .setURL(
        'https://discord.com/oauth2/authorize?client_id=759383573575892992&permissions=8&scope=bot'
      )
      .setColor(client.serverconfig[message.guild.id].EmbedColor)
      .setFooter(
        'Made by Ghostfighter50 - https://the-0x41-bot.herokuapp.com/'
      )

    message.channel.send(embed)
  }
}
