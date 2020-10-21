const Discord = require('discord.js');
exports.run = async (client, message) => {
    let args = message.content.slice(4).split(' ');

  let reason = args[2]
  if(!message.mentions.users.first())return message.reply("❌ Please mention someone to unmute them")
  let user = message.mentions.users.first();
  let muteRole = client.guilds.cache.get(message.guild.id).roles.cache.find(val => val.name === 'Muted');
  if (!muteRole) {
    try {
        muteRole = await message.guild.roles.create({ data: {
            name:"Muted",
            color: "#000000",
            permissions:[]
        }});

        message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.createOverwrite(muteRole, {
                SEND_MESSAGES: false,
                MANAGE_MESSAGES: false,
                READ_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    } catch(e) {
        console.log(e.stack);
    }
  }
  if (reason.length < 1) reason = '❌ No reason Supplied';
  if (message.mentions.users.size < 1) return message.reply('❌ You must mention someone to mute them.').catch(console.error);

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply('❌ I do not have the correct permissions.').catch(console.error);
  if (message.guild.member(user).roles.cache.has(muteRole.id)) {
    message.guild.member(user).roles.remove(muteRole).then(() => {
      const embed = new Discord.MessageEmbed()
     
      .addField('Action:', 'Unmute')
      .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
      .addField('Reason', reason)
      .setColor(0x00AE86)
      .setURL("https://discord.gg/s6aFpGq")
      .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")     
   
      message.channel.send({embed})
  
      if(user.bot) return;
      message.mentions.users.first().send({embed}).catch(e =>{
        if(e) return 
      });
    });

};
}