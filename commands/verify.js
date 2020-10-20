const Discord = require('discord.js');



module.exports.run = async (client, message) => {
 let args = message.content.slice(4).split(' ');
 let challenge = args[2]
 let value = args[3]
 let user = message.author.id


 const flag = {
  flag1: { value: 'test', points: 20 },
  flag2: { value: 'test2', points: 30 },
 };
 const result = Object.entries(flag).find(
  ([flag, data]) => flag === challenge && data.value === value
 );

 if (!result){
 let embed = new Discord.MessageEmbed()
 .setTitle("❌ Error, incorrect value/challenge")
 .setDescription("Don't give up, you can finish this challenge !")
 .setThumbnail(message.guild.iconURL)
 .setColor(0x00AE86)
 .setURL("https://discord.gg/s6aFpGq")
 .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
 message.channel.send(embed)
}
let userPoints = client.points.get(`${message.guild.id}-${user}`, "points");

const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(`✅ Challenge finished ! `) 
.setDescription(`${user.tag} has received **${result[1].points}** points and now has **${userPoints}** points.`)
.setColor(0x00AE86);
userPoints += result[1].points;


client.points.set(`${message.guild.id}-${user.id}`, userPoints, "points")


message.channel.send(verified);
};