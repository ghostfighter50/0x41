const fs = require("fs")
const Discord = require("discord.js")
const config = require("../config.json")

exports.run = (client, message, args) => {

    const deniedembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`❌ Acces Denied ! `) 
    .setColor(client.config.EmbedColor);   

    const errorembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`❌ The role is equal or higher than the bot's highest Role or the role is not found ! `) 
    .setColor(client.config.EmbedColor);    

    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor(client.config.EmbedColor) 
    .setTitle("✅ Succesfully set autorole !")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(deniedembed);

    try {
     let role = message.mentions.roles.first()
     config.autoroles.push(role.id)
     fs.writeFile("../config.json", JSON.stringify(config, null, 2), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(config, null, 2));
      });
     message.channel.send(embed)

    } catch (e) {
        console.log(e)
        message.channel.send(errorembed)
    }
}
