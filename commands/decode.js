exports.run = (client, message, args) => {

    let Discord = require("discord.js")
    let base64 = Buffer.from(args[1], "base64").toString('ascii')
    let hex = Buffer.from(args[1],"hex").toString('ascii')
    
    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setColor(client.config.EmbedColor);
    
    if(args[0] == 'base64'){
        embed.setTitle(base64 )
        message.channel.send(embed)}
    
    
    else if(args[0] == 'hex'){
        embed.setTitle( hex )
        message.channel.send(embed)}
    else {
        const error = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL)
        .setTitle(`❌ Invalid Syntax  ! `) 
        .setColor(client.config.EmbedColor);
        return message.channel.send(error)
    }
    }
    
