const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let channel = message.guild.channels.cache.find(c => c.name == "logs")
let TargetUser = message.mentions.members.first()
let reason = args[1]
if(!TargetUser) return message.reply("❌ specify a user !")
if(!reason) return message.reply("❌ enter a reason !")
let embed = new Discord.MessageEmbed()
  .setTitle("New Report by " + message.author.tag)
  .setDescription(`Reported user : ${TargetUser.toString()}\nReason : ${reason}`)
  .setColor(0x00AE86)
  .setTimestamp()
 channel.send(embed)
message.channel.send(new Discord.MessageEmbed().setDescription(`✅ ${TargetUser.toString()} was reported by ${message.author.toString()} `))
}
