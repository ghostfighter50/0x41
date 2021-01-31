const Discord = require("discord.js");

exports.run = async (client, message, args) => {       
    message.delete()
    let content = args.join(" ")
    let embed = new MessageEmbed()
      .setDescription(content)
    await message.channel.send(embed)
    
 }
