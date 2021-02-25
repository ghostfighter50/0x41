
const Discord = require("discord.js");

exports.run = async (client, message, args) => {      
    function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();
    if(http.status != 403) return true
    else return false

}
    let user = args[0]
    let embed = new Discord.MessageEmbed()
   .setColor(0x00AE86)
   .setImage(`https://tryhackme-badges.s3.amazonaws.com/${args[0]}.png`)
   .setFooter("You might want to reload the image in your profile")
    if(imageExists() == true) {
    await message.channel.send(embed)
    await message.delete()
    } else {
    await message.reply(`:x: Username ${args[0]} not found`)
    await message.delete()
    }
}
