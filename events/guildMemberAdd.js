const Discord = require("discord.js")
const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Welcome')
        .addField('', member.nickname)
        .setImage(member.user.avatarURL)

    member.guild.channels.get('605000838573850635').send(exampleEmbed);
