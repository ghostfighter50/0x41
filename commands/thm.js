
const Discord = require("discord.js");

exports.run = async (client, message, args) => {       
    let user = args[0]
    let embed = new Discord.MessageEmbed()
   .setColor(0x00AE86)
   .setImage(`https://tryhackme-badges.s3.amazonaws.com/${args[0]}.png`)
   .setFooter("You might want to reload the image in your profile")
    try {
    await message.channel.send(embed)
    await message.delete()
    }
    catch {
    await message.reply(`:x: Username ${args[0]} not found`)
    await message.delete()
    }
}
