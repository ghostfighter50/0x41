exports.run = (client, message, args) => {

let Discord = require("discord.js")
let base64 = Buffer.from(args[1]).toString('base64')
let hex = Buffer.from(args[1]).toString('hex')

let embed = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(args[0]) 
.setColor(0x00AE86);

if(args[0] == 'base64'){
    embed.setTitle(base64 )
    message.channel.send(embed)}


else if(args[0] == 'hex'){
    embed.setTitle(hex )
    message.channel.send(embed)}
else {
    const error = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
    .setTitle(`❌ Invalid Syntax  ! `) 
    .setColor(0x00AE86);
    return message.channel.send(error)
}
}
