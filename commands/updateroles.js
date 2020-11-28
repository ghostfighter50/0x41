exports.run = async (client, message) => {
const Discord = require('discord.js');
const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/pU2JHgG5Mj")
.setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
.setTitle(`✅ Roles updated ! `) 
.setColor(0x00AE86);
let embed = new Discord.MessageEmbed()
.setTitle("❌ Not enough points ")
.setDescription("Don't give up, you can make those challenges !")
.setThumbnail(message.guild.iconURL)
.setColor(0x00AE86)
.setURL("https://discord.gg/pU2JHgG5Mj")
.setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
let user = message.author
let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
let member = message.member;
if (userPoints >= "100") {
    
   let testedRole = message.guild.roles.cache.get('782268863903432734');
   let testedUser = member
   let removerole =  message.guild.roles.cache.get('782268864326008873');
   testedUser.roles.remove(removerole)
   testedUser.roles.add(testedRole);
   message.channel.send(verified);
}
else if (userPoints >= "50") {
    
   let testedRole = message.guild.roles.cache.get('782268864326008873');
   let testedUser = member
   let removerole =  message.guild.roles.cache.get('782268865048215583');
   testedUser.roles.remove(removerole)
   

   testedUser.roles.add(testedRole);
   message.channel.send(verified);
}
else if (userPoints >= "20") {
    
        let testedRole = message.guild.roles.cache.get('782268865048215583');
        let testedUser = member
        
    
        testedUser.roles.add(testedRole);
     message.channel.send(verified);
      }
   
    
    else return message.channel.send(embed)
    }    
    