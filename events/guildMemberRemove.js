
module.exports = async (client, member) => {

    const Discord = require("discord.js")
    let channel = member.guild.channels.cache.find(c => c.id == client.config.WelcomeChannel)


 
    let embed = new Discord.MessageEmbed()
        .setTitle(`❌ ${member.user.username} left...`)
        .setColor(client.config [message.guild.id] .EmbedColor)
        .setThumbnail(member.avatarURL)

    await channel.send(embed)
   
}
