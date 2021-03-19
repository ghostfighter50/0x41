module.exports = {
  name: 'remove',
  description: 'remove a specified amount of points to the specified member',
  aliases: ['rm'],
  usage: 'sudo remove <@user> <amount>',
  type: 'points',
  admin: true,
  async run (client, message, args) {
    const Discord = require('discord.js')

    if (client.serverconfig[message.guild.id].Levels == false) {
      return message.reply(
        'Set the Leveling system with `sudo  set-level <1|2|3> <points> <@role>`'
      )
    }

    const user = message.mentions.users.first() || client.users.get(args[0])
    if (!user) { return message.reply('You must mention someone or give their ID!') }

    const pointsToDel = parseInt(args[1], 10)
    if (!pointsToDel) { return message.reply("You didn't tell me how many points to remove...") }

    let userPoints = client.points.get(
			`${message.guild.id}-${user.id}`,
			'points'
    )

    userPoints -= pointsToDel

    client.points.set(`${message.guild.id}-${user.id}`, userPoints, 'points')
    const giveembed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL)
      .setTitle('✅ Points removed  ! ')
      .setDescription(
				`${user.tag} had  **${pointsToDel}** points removed and now has **${userPoints}** points.`
      )
      .setColor(client.serverconfig[message.guild.id].EmbedColor)

    message.channel.send(giveembed)
  }
}
