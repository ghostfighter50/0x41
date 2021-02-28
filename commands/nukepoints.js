exports.run = (client, message, args) => {
    const Discord = require("discord.js")
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send("**Insufficient permissions :no_entry:.**")
    const filtered = client.points.filter( p => p.guild === message.guild.id );
    if(client.config [message.guild.id].Levels == false) return message.reply("Set the Leveling system with `sudo set-level <1|2|3> <points> <@role>`")

    const toRemove = filtered
   
    
    client.points.clear()
    message.guild.members.cache.forEach(member => {
          client.points.ensure(`${message.guild.id}-${member.id}`, {
          user: member.id,
          guild: member.guild.id,
          points: 0,
        });
    })
    const embed = new Discord.MessageEmbed()
    .setTitle("Nuked !")
    .setDescription(`I've nuked the points of  ${toRemove.size} user.`)
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setThumbnail(message.author.avatarURL)

    message.channel.send(embed);
  }


















  
