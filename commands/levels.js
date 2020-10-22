exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .addFields(
    {name: "<@&764885057700626452>", value : "20 Points"},
    {name: "<@&764884966089687051>", value : "50 Points"},
    {name: "<@&764884869133500437>", value : "100 Points"})
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
    .setTitle(`📖 Help `) 
    .setColor(0x00AE86)   

    message.channel.send(embed)
}