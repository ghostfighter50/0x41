exports.run = (client, message, args) => {
 const Discord = require("discord.js")

 const filtered = client.points.filter( p => p.guild === message.guild.id ).array();

 const sorted = filtered.sort((a, b) => b.points - a.points);

 const top10 = sorted.splice(0, 10);

 const embed = new Discord.MessageEmbed()
   .setTitle("Leaderboard")
   .setAuthor(client.user.username, message.guild.iconURL())
   .setDescription("Our top 10 points leaders!")
   .setColor(client.config [message.guild.id] .EmbedColor);
 for(const data of top10) {
   try {
     embed.addField(client.users.cache.get(data.user).tag, `${data.points} points `);
   } catch {
     embed.addField(`<@${data.user}>`, `${data.points} points`);
   }
 }
 return message.channel.send({embed});
}