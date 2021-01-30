
module.exports = async (client, member) => {

    const Discord = require("discord.js")
    let channel = member.guild.channels.cache.find(c => c.id == 803603228498329652)

 
    let embed = new Discord.MessageEmbed()
        .setTitle(`❌ ${member.user.username} left...`)
        .setColor(0x00AE86)
        .setThumbnail(member.avatarURL)

    await channel.send(embed)
   
}
