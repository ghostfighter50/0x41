exports.run = async (client, message) => {
const Discord = require('discord.js');
    
const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle(`✅ Roles updated ! `) 
.setColor(0x00AE86);
    
let embed = new Discord.MessageEmbed()
.setTitle("❌ Not enough points ")
.setDescription("Don't give up, you can make those challenges !")
.setThumbnail(message.guild.iconURL)
.setColor(0x00AE86)

let user = message.author
let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
let member = message.member;
if (userPoints >= "100") {
    
   let testedRole = message.guild.roles.cache.get('808327981020741643');
   let testedUser = member
   let removerole =  message.guild.roles.cache.get('808327981764182028');
   testedUser.roles.remove(removerole)
   testedUser.roles.add(testedRole);
   message.channel.send(verified);
}
else if (userPoints >= "50") {
    
   let testedRole = message.guild.roles.cache.get('808327981764182028');
   let testedUser = member
   let removerole =  message.guild.roles.cache.get('808327983039119360');
   testedUser.roles.remove(removerole)
   

   testedUser.roles.add(testedRole);
   message.channel.send(verified);
}
else if (userPoints >= "20") {
    
        let testedRole = message.guild.roles.cache.get('808327983039119360');
        let testedUser = member
        
    
        testedUser.roles.add(testedRole);
     message.channel.send(verified);
      }
   
    
else {
   let removerole =  message.guild.roles.cache.get('808327983039119360');
   let testedUser = member
   testedUser.roles.remove(removerole)
    message.channel.send(embed)
    }
}    
    
