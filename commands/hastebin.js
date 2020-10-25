const Discord = require("discord.js");
const hastebin = require('hastebin-gen');

exports.run = async (client, message, args) => {
   try {
       
  
    let haste = args[0]
    hastebin(haste).then(r => {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL:", r)
        .setURL("https://discord.gg/s6aFpGq")
        .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
        .setColor(0x00AE86);
        message.channel.send(hastebinembed);
    })
} catch  {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL : SERVICE UNAVAILABLE")
        .setURL("https://discord.gg/s6aFpGq")
        .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
        .setColor(0x00AE86);
        message.channel.send(hastebinembed);

}
    
}