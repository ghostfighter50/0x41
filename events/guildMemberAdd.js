module.exports = (member) =>{
const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome')
        .addField('', member.nickname)
        .setImage(member.user.avatarURL)

    member.guild.channels.get('803603228498329652').send(embed);
}
