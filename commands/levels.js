exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    let level1 = message.guild.roles.cache.get(client.config[message.guild.id].LevelRoles.level1)
    let level2 = message.guild.roles.cache.get(client.config[message.guild.id].LevelRoles.level2)
    let level3 = message.guild.roles.cache.get(client.config[message.guild.id].LevelRoles.level3)
    if(client.config [message.guild.id].Levels == false) return message.reply("Set the Leveling system with `sudo set-level <1|2|3> <@role>`")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addFields(
    {name: "1 "+level1.name, value : "20 Points"},
    {name: "2 "+level2.name, value : "50 Points"},
    {name: "3 "+level3.name, value : "100 Points"})
    .setTitle(`📖 Levels `) 
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setFooter("Do `sudo set-level <1|2|3> <@role>` to set a level")

    message.channel.send(embed)
}
