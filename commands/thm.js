
const Discord = require("discord.js");
const https = require("https")

exports.run = async (client, message, args) => {      

   if(!args[0]) return message.reply(":x: Please enter a username !")
    let embed = new Discord.MessageEmbed()
   .setColor(client.config [message.guild.id] .EmbedColor)
   .setImage(`https://tryhackme-badges.s3.amazonaws.com/${args[0]}.png`)
   .setDescription("If there's not any images, the requested user profile is incorrect !")
   .setFooter("You might want to reload the image in your profile")
    

    await message.channel.send(embed)
    await message.delete()
   

}
