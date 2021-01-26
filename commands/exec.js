const childProcess = require('child_process');
exports.run = (client, message) => {


    let args = message.content.split(' ').splice(2).join(' ')
    console.log(args)
    const Discord = require("discord.js")
    const deniedembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setTitle(`❌ Acces Denied ! `) 
    .setColor(0x00AE86);
    
    if(!message.member.hasPermission('ADMINISTRATOR')) 
    return message.channel.send(deniedembed);
    childProcess.exec(args, {},
        (err, stdout, stderr) => {
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout, stderr + '```');
        });
}
