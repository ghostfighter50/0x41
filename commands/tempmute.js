const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message) => {
    let args = message.content.slice(4).split(' ');

    let tomute = message.mentions.users.first() || message.guild.members.cache.get(args[2]);
    if(!tomute) return message.reply("❌ Couldn't find that user.");
    if(message.author.id === message.mentions.users.first()) return message.reply("❌ You can't mute yourself:facepalm:");
    let muteRole = message.guild.roles.cache.find(val => val.name === "Muted");
    if (!muteRole) {
        try {
            muteRole = await message.guild.roles.create({data:{
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
    let mutetime = args[3];
    if(!mutetime) return message.reply("❌ You didnt specify a time for temporary mute.");
    
    const embed = new Discord.MessageEmbed()
    .addField('Action:', 'Temp Mute')
    .addField('User:', `${tomute.username}#${tomute.discriminator} (${tomute.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Length', mutetime +" sec")
    .setURL("https://discord.gg/pU2JHgG5Mj")
    .setColor(0x00AE86)
    .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
    message.channel.send({embed});

    message.guild.member(tomute).roles.add(muteRole);

    setTimeout(function(){
        message.guild.member(tomute).roles.remove(muteRole)
        message.channel.send(`<@${tomute.id}> has been unmuted`)
    }, mutetime * 1000 );
}
