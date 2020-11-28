exports.run = (client, message, args) => {
    const Discord = require("discord.js")
    const deniedembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/pU2JHgG5Mj")
    .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
    .setTitle(`❌ Acces Denied ! `) 
    .setColor(0x00AE86);
    
    if(!message.member.hasPermission('ADMINISTRATOR')) 
    return message.channel.send(deniedembed);
    
    const user = message.mentions.users.first() || client.users.get(args[0]);
    if(!user) return message.reply("You must mention someone or give their ID!");
    
    const pointsToDel = parseInt(args[1], 10);
    if(!pointsToDel) 
    return message.reply("You didn't tell me how many points to remove...")
    
    
    
    let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
    
    userPoints -= pointsToDel;
    
    
    client.points.set(`${message.guild.id}-${user.id}`, userPoints, "points")
    const giveembed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/pU2JHgG5Mj")
    .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
    .setTitle(`✅ Points removed  ! `) 
    .setDescription(`${user.tag} had  **${pointsToDel}** points removed and now has **${userPoints}** points.`)
    .setColor(0x00AE86);
    
    message.channel.send(giveembed);
    }