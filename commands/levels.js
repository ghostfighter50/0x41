exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addFields(
    {name: "1️⃣ Beginner", value : "20 Points"},
    {name: "2️⃣ Intermediate", value : "50 Points"},
    {name: "3️⃣ Expert", value : "100 Points"})
    .setTitle(`📖 Help `) 
    .setColor(client.config.EmbedColor)   

    message.channel.send(embed)
}
