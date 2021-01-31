const Discord = require("discord.js");

exports.run = async (client, message, args) => {       
    let content = args.join(" ")
    let embed = new Discord.MessageEmbed()
      .setDescription(content)
    await message.channel.send(embed)
    await message.delete()

 }
