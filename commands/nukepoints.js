exports.run = (client, message, args) => {
    const Discord = require("discord.js")

    const filtered = client.points.filter( p => p.guild === message.guild.id );

    const toRemove = filtered
   

    client.points.clear()
    const embed = new Discord.MessageEmbed()
    .setTitle("Nuked !")
    .setDescription(`I've nuked the points of  ${toRemove.size} user.`)
    .setColor(0x00AE86)
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")

    message.channel.send(embed);
  }


















  