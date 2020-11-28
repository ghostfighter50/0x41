exports.run = (client, message, args) => {
    const Discord = require("discord.js")
    const key = `${message.guild.id}-${message.author.id}`;
    const embed = new Discord.MessageEmbed()
    .addField("\n\n**Points** : ",  `${client.points.get(key, "points")}`)
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/pU2JHgG5Mj")
    .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
    .setTitle(`${message.author.username}'s points`) 
    .setColor(0x00AE86);

    message.channel.send(embed)

} 