const fs = require("fs")
const Discord = require("discord.js")
const config = require("../config.json")

exports.run = (client, message, args) => {
    if(client.config [message.guild.id].Levels == false) return message.reply("Set the Leveling system with `sudo set-level <1|2|3> <@role>`")

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
    .setTitle("✅ Succesfully set flag !")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(deniedembed);

    try {
    
    if(!args[0]) return message.channel.send(errorembed)
    if(!args[1]) return message.channel.send(errorembed)
    if(!args[2]) return message.channel.send(errorembed)
    config[message.guild.id].Flags.push({name : args[0],value : args[1], points : args[2]})

    fs.writeFileSync("/root/Downloads/0x41/config.json", JSON.stringify(config, null, 2));
      
     message.channel.send(embed)

    } catch (e) {
        console.log(e)
        message.channel.send(errorembed)
    }
}