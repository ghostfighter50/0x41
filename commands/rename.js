const Discord = require('discord.js');


exports.run = (client, message) => {
    const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/pU2JHgG5Mj")
.setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
.setTitle(`✅ Nickname updated ! `) 
.setColor(0x00AE86);
  let newname = args[3]
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[2])
    if (!user) return message.reply('You must Tag someone or give me a Valid userID for me to rename them.').catch(console.error);
  }else{
    user = message.guild.member(mention)
  }
  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`An error occured: \`\`\`${e}\`\`\``)
  });
  message.channel.send(verified);
};