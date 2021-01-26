exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addFields(
    {name: "1️⃣ Begginer", value : "20 Points"},
    {name: "2️⃣ Intermediate", value : "50 Points"},
    {name: "3️⃣ Expert", value : "100 Points"})
    .setTitle(`📖 Help `) 
    .setColor(0x00AE86)   

    message.channel.send(embed)
}
