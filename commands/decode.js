exports.run = (client, message, args) => {

    let Discord = require("discord.js")
    let base64 = Buffer.from(args[1], "base64").toString('ascii')
    let hex = Buffer.from(args[1],"hex").toString('ascii')
    
    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/pU2JHgG5Mj")
    .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
    .setColor(0x00AE86);
    
    if(args[0] == 'base64'){
        embed.setTitle(base64 )
        message.channel.send(embed)}
    
    
    else if(args[0] == 'hex'){
        embed.setTitle( hex )
        message.channel.send(embed)}
    else {
        const error = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL)
        .setURL("https://discord.gg/pU2JHgG5Mj")
        .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
        .setTitle(`❌ Invalid Syntax  ! `) 
        .setColor(0x00AE86);
        return message.channel.send(error)
    }
    }
    