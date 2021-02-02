const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let channel = message.guild.channels.cache.find(c => c.name == "logs")
let TargetUser = message.mentions.first()
let reason = args[1]
if(!TargetUser) return message.reply("❌ specify a user !")
if(!reason) return message.reply("❌ enter a reason !")
let embed = new Discord.MessageEmbed
  .setTitle("New Report by " + message.author.toString()")
  .setDescription(`Reported user : ${TargetUser.toString()}\n\nReason : ${reason}`)
  .setColor(0x00AE86)
 channel.send(embed)
}
