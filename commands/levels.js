exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .addFields(
    {name: "1️⃣ Débutant", value : "20 Points"},
    {name: "2️⃣ Intermediaire", value : "50 Points"},
    {name: "3️⃣ Expert", value : "100 Points"})
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
    .setTitle(`📖 Help `) 
    .setColor(0x00AE86)   

    message.channel.send(embed)
}