exports.run = (client, message, args) => {
    const Discord = require("discord.js")
    const key = `${message.guild.id}-${message.author.id}`;
    const embed = new Discord.MessageEmbed()
    .addField("\n\n**Points** : ",  `${client.points.get(key, "points")}`)
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
    .setTitle(`${message.author}'s points`) 
    .setColor(0x00AE86);

    message.channel.send(embed)

} 