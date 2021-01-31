const Discord = require("discord.js");

exports.run = async (client, message, args) => {       
    let content = args.join(" ")
    let embed = new Discord.MessageEmbed()
      .setDescription(content)
      .setColor(0x00AE86)
    await message.channel.send(embed)
    await message.delete()

 }
