const childProcess = require('child_process');
exports.run = (client, message) => {
    let args = message.content.slice(4).split(' ');
    const Discord = require("discord.js")
    const deniedembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
    .setTitle(`❌ Acces Denied ! `) 
    .setColor(0x00AE86);
    
    if(!message.member.hasPermission('ADMINISTRATOR')) 
    return message.channel.send(deniedembed);
    childProcess.exec(args[2], {},
        (err, stdout, stderr) => {
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout + '```');
        });
}