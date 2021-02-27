exports.run = (client, message, args) => {
    const fs = require("fs")
    let config = require("../config.json")
    const Discord = require("discord.js")
    var i = 0
    const deniedembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`❌ Acces Denied ! `) 
    .setColor(client.config.EmbedColor);    
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor(client.config.EmbedColor) 
    .setTitle("✅ Succesfully set autoroles !")
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(deniedembed);

   message.mentions.roles.forEach(role => {
        console.log(role.id)
        config.autoroles.push(role.id)
        embed.addField(i++, role.toString(), true)
    })
    fs.writeFileSync("../config.json", JSON.stringify(config, null, 2))
    message.channel.send(embed)
}
