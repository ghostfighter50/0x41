const Discord = require("discord.js");
const hastebin = require('hastebin-gen');

exports.run = async (client, message, args) => {
   
    let haste = args[0]
    hastebin(haste).then(r => {
        let hastebinembed = new Discord.RichEmbed()
        .setTitle("**Hastebin**")
        .addField("URL:", r)
        .setURL("https://discord.gg/s6aFpGq")
        .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
        .setColor(0x00AE86);
        message.channel.send(hastebinembed);
    }).catch(console.error);
    message.delete();

    
}