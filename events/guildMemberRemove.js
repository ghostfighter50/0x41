
module.exports = async (client, member) => {

    const Discord = require("discord.js")
    let chatChannel = member.guild.channels.cache.find(c => c.name == "💬•off-topic")

 
    let embed = new Discord.MessageEmbed()
        .setTitle(`❌ ${member.user.username} left...`)
        .setColor(0x00AE86)
        .setThumbnail(member.avatarURL)

    await channel.send(embed)
   
}
