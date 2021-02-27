const fs = require("fs")
const Discord = require("discord.js")
const config = require("../config.json")

exports.run = (client, message, args) => {
    var i = 1
    const deniedembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`❌ Acces Denied ! `) 
    .setColor(client.config [message.guild.id] .EmbedColor);   

    const errorembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`❌ Error ! `) 
    .setColor(client.config [message.guild.id] .EmbedColor);    

    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor(client.config [message.guild.id] .EmbedColor) 
    .setTitle("Autoroles")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(deniedembed);

    try {
    
     config [message.guild.id] .autoroles.forEach(r => {
         let role = message.guild.roles.cache.find(role => role.id == r);
         embed.addField("Role " + i++, role , true)
        })
        if(config [message.guild.id] .autoroles.length == 0) embed.addField("Role 1 :","No roles !",true )
      
     message.channel.send(embed)

    } catch (e) {
        console.log(e)
        message.channel.send(errorembed)
    }
}
