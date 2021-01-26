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
    
   let testedRole = message.guild.roles.cache.get('803603102330126366');
   let testedUser = member
   let removerole =  message.guild.roles.cache.get('803603102653218837');
   testedUser.roles.remove(removerole)
   testedUser.roles.add(testedRole);
   message.channel.send(verified);
}
else if (userPoints >= "50") {
    
   let testedRole = message.guild.roles.cache.get('803603102653218837');
   let testedUser = member
   let removerole =  message.guild.roles.cache.get('803603103961841674');
   testedUser.roles.remove(removerole)
   

   testedUser.roles.add(testedRole);
   message.channel.send(verified);
}
else if (userPoints >= "20") {
    
        let testedRole = message.guild.roles.cache.get('803603103961841674');
        let testedUser = member
        
    
        testedUser.roles.add(testedRole);
     message.channel.send(verified);
      }
   
    
else {
   let removerole =  message.guild.roles.cache.get('803603102330126366');
   let testedUser = member
   testedUser.roles.remove(removerole)
    message.channel.send(embed)
    }
}    
    
