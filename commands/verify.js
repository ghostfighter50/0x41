const Discord = require('discord.js');


exports.run = async (client, message) => {
    try{
 let args = message.content.slice(4).split(' ');
 let challenge = args[2]
 let value = args[3]
 let user = message.author.id
 const key = `${message.guild.id}-${message.author.id}`;
 message.delete()

 const flag =  {
  "re-1" : { value: 'cljrfjdm526vh5w2C1', points: 20 },
 }

 const result = Object.entries(flag).find(
  ([flag, data]) => flag === challenge && data.value === value
 );

 if (!result){
 let embed = new Discord.MessageEmbed()
 .setTitle("❌ Error, incorrect value/challenge")
 .setDescription("Don't give up, you can finish this challenge !")
 .setThumbnail(message.guild.iconURL)
 .setColor(0x00AE86)
 message.channel.send(embed)
}


let userPoints = client.points.get(`${message.guild.id}-${user}`, "points");
userPoints += result[1].points;
client.points.set(key, userPoints, "points")

const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle(`✅ Challenge finished ! `) 
.setDescription(`${user.tag} has received **${result[1].points}** points and now has **${userPoints}** points.`)
.setColor(0x00AE86);

;

message.channel.send(verified);
    }catch(e){
        return console.log(e)
    }
};
