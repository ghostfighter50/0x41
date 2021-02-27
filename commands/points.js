exports.run = (client, message, args) => {
    const Discord = require("discord.js")
    const key = `${message.guild.id}-${message.author.id}`;
    const embed = new Discord.MessageEmbed()
    .addField("\n\n**Points** : ",  `${client.points.get(key, "points")}`)
    .setThumbnail(message.author.avatarURL)
    .setTitle(`${message.author.username}'s points`) 
    .setColor(client.config [message.guild.id] .EmbedColor);

    message.channel.send(embed)

} 
