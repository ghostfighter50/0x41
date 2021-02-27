exports.run = async (client, message) => {
const Discord = require('discord.js');
    
const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle(`✅ Roles updated ! `) 
.setColor(client.config.EmbedColor);
    
let embed = new Discord.MessageEmbed()
.setTitle("❌ Not enough points ")
.setDescription("Don't give up, you can make those challenges !")
.setThumbnail(message.guild.iconURL)
.setColor(client.config.EmbedColor)

let user = message.author
let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
let member = message.member;
if (userPoints >= "100") {
    
   let Role = message.guild.roles.cache.get(client.config.LevelRoles.level3);
   let removerole =  message.guild.roles.cache.get(client.config.LevelRoles.level2);
   member.roles.remove(removerole)
   member.roles.add(Role);
   message.channel.send(verified);
}
else if (userPoints >= "50") {
    
   let Role = message.guild.roles.cache.get(client.config.LevelRoles.level2);
   let removerole =  message.guild.roles.cache.get(client.config.LevelRoles.level1);
   member.roles.remove(removerole)
   member.roles.add(Role);
   message.channel.send(verified);
}
else if (userPoints >= "20") {
    
   let Role = message.guild.roles.cache.get(client.config.LevelRoles.level1);
   member.roles.add(Role);
   message.channel.send(verified);
   }
   
    
else {
   let removerole =  message.guild.roles.cache.get(client.config.LevelRoles.level1);
   member.roles.remove(removerole)
    message.channel.send(embed)
    }
}    
    
