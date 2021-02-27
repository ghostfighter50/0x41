
module.exports = async (client, member) => {

    const Discord = require("discord.js")
    if(client.config[member.guild.id].JoinMessage == false) return
    let channel = member.guild.channels.cache.find(c => c.id == client.config [member.guild.id].WelcomeChannel)


 
    let embed = new Discord.MessageEmbed()
        .setTitle(`❌ ${member.user.username} left...`)
        .setColor(client.config [member.guild.id] .EmbedColor)
        .setThumbnail(member.avatarURL)

    await channel.send(embed)
   
}
