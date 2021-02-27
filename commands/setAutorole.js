exports.run = (client, message) => {

    let args = message.content.split(' ').splice(2).join(' ')
    const Discord = require("discord.js")
    const deniedembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`❌ Acces Denied ! `) 
    .setColor(client.config.EmbedColor);    
    if (!message.member.hasPermission("ADMINISTRATOR"))     return message.channel.send(deniedembed);
}
