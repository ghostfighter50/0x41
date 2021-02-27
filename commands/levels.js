exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    let level1 = message.guild.roles.cache.get(client.config[message.guild.id].LevelRoles.level1)
    let level2 = message.guild.roles.cache.get(client.config[message.guild.id].LevelRoles.level2)
    let level3 = message.guild.roles.cache.get(client.config[message.guild.id].LevelRoles.level3)

    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addFields(
    {name: level1.name, value : "20 Points"},
    {name: level2.name, value : "50 Points"},
    {name: level3.name, value : "100 Points"})
    .setTitle(`📖 Levels `) 
    .setColor(client.config [message.guild.id] .EmbedColor)   

    message.channel.send(embed)
}
