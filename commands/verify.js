const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    try{
 if(client.config [message.guild.id].Levels == false) return message.reply("Set the Leveling system with `sudo set-level <1|2|3> <@role>`")

 let user = message.author.id
 const key = `${message.guild.id}-${message.author.id}`;




 let embed = new Discord.MessageEmbed()
 .setTitle("❌ Error, incorrect value/challenge")
 .setDescription("Don't give up, you can finish this challenge !")
 .setThumbnail(message.guild.iconURL)
 .setColor(client.config [message.guild.id] .EmbedColor)




 let userPoints = client.points.get(`${message.guild.id}-${user}`, "points");



client.config[message.guild.id].Flags.forEach(flag =>{
    if(flag.name == args[0] && flag.value == args[1] ) {
        userPoints +=  flag.points

        const verified = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL)
        .setTitle(`✅ Challenge finished ! `) 
        .setDescription(`${user.tag} has received **${flag.points}** points and now has **${userPoints.slice(1)}** points.`)
        .setColor(client.config [message.guild.id] .EmbedColor);        
        client.points.set(key, userPoints.slice(1), "points")
        message.channel.send(verified);
    }
    else if(flag.name == args[0] && flag.value !== args[1] ){
  message.channel.send(embed)

    }
    else return
})
message.delete()

    }catch(e){
        return console.log(e)
    }
};
