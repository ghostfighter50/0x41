
const Discord = require("discord.js");
const https = require("https")

exports.run = async (client, message, args) => {      

   

    let user = args[0]
    let embed = new Discord.MessageEmbed()
   .setColor(0x00AE86)
   .setImage(`https://tryhackme-badges.s3.amazonaws.com/${args[0]}.png`)
   .setDescription("If there's not any images, the requested user profile is incorrect !")
   .setFooter("You might want to reload the image in your profile")
    

    await message.channel.send(embed)
    await message.delete()
    
  
})

}
