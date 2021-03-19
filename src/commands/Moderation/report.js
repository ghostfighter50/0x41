const Discord = require('discord.js')

module.exports = {
  name: 'report',
  description: 'reports the specified user for the specified reason',
  aliases: ['rp'],
  usage: 'sudo report <@user> <reason>',
  type: 'mod',
  admin: false,
  run: async (client, message, args) => {
    const channel = message.guild.channels.cache.find(
      (c) => c.id == client.serverconfig[message.guild.id].ReportChannel
    )
    const TargetUser = message.mentions.members.first()
    const reason = args.slice(1).join(' ')
    if (!TargetUser) return message.reply('❌ specify a user !')
    if (!reason) return message.reply('❌ enter a reason !')
    const embed = new Discord.MessageEmbed()
      .setTitle('❗ New Report by ' + message.author.tag)
      .setDescription(
				`Reported user : ${TargetUser.toString()}\nReason : ${reason}`
      )
      .setColor(client.serverconfig[message.guild.id].EmbedColor)
      .setTimestamp()
    channel.send(embed)
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
					`✅ ${TargetUser.toString()} was reported by ${message.author.toString()} `
        )
        .setColor(client.serverconfig[message.guild.id].EmbedColor)
    )
  }
}
