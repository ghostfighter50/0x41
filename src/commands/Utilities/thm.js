const Discord = require('discord.js')

module.exports = {
  name: 'thm',
  description: 'get the tryhackme badge of the specified tryhackme user',
  aliases: ['tryhackme'],
  usage: 'sudo thm <user>',
  type: 'util',
  admin: false,
  run: async (client, message, args) => {
    if (!args[0]) return message.reply(':x: Please enter a username !')
    const embed = new Discord.MessageEmbed()
      .setColor(client.serverconfig[message.guild.id].EmbedColor)
      .setImage(`https://tryhackme-badges.s3.amazonaws.com/${args[0]}.png`)
      .setDescription(
        "If there's not any images, the requested user profile is incorrect !"
      )
      .setFooter('You might want to reload the image in your profile')

    await message.channel.send(embed)
    await message.delete()
  }
}
