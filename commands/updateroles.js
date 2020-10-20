exports.run = async (client, message) => {
const Discord = require('discord.js');
const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(`✅ Roles updated ! `) 
.setColor(0x00AE86);
let embed = new Discord.MessageEmbed()
.setTitle("❌ Not enough points ")
.setDescription("Don't give up, you can make those challenges !")
.setThumbnail(message.guild.iconURL)
.setColor(0x00AE86)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
let user = message.author
let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
let member = message.member;

     if (userPoints >= "20") {
    
        let testedRole = message.guild.roles.cache.get('764885057700626452');
        let testedUser = member
        
    
        testedUser.roles.add(testedRole);
     message.channel.send(verified);
      }
     else if (userPoints >= "50") {
    
        let testedRole = message.guild.roles.cache.get('764884966089687051');
        let testedUser = member
        
    
        testedUser.roles.add(testedRole);
        message.channel.send(verified);
    }
     else if (userPoints >= "100") {
    
        let testedRole = message.guild.roles.cache.get('764884869133500437');
        let testedUser = member
        
    
        testedUser.roles.add(testedRole);
        message.channel.send(verified);
    }
    else return message.channel.send(embed)
    }    
    