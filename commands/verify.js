const Discord = require('discord.js');
const flag = {
 flag1: { value: 'test', points: 20 },
 flag2: { value: 'test2', points: 30 },
};

module.exports.run = async (client, message) => {
 let args = message.content.slice(4).split(' ');
 let challenge = args[2]
 let value = args[3]

 const result = Object.entries(flag).find(
  ([flag, data]) => flag === challenge && data.value === value
 );

 if (!result)
 const embed = new Discord.MessageEmbed()
 .setTitle("❌ Error, incorrect value/challenge")
 .setDescription("Don't give up, you can finish this challenge !")
 .setThumbnail(message.guild.iconURL)
 .setColor(0x00AE86)
 .setURL("https://discord.gg/s6aFpGq")
 .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
 let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
userPoints += result[1].points;


client.points.set(`${message.guild.id}-${user.id}`, userPoints, "points")
const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(`✅ Challenge finished ! `) 
.setDescription(`${user.tag} has received **${result[1].points}** points and now has **${userPoints}** points.`)
.setColor(0x00AE86);

message.channel.send(verified);
};