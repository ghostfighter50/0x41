const Discord = require("discord.js");
const hastebin = require('hastebin-gen');

exports.run = async (client, message, args) => {
   try {
       
  
    let haste = args.join(" ")
    hastebin(haste).then(r => {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL:", r)
        .setColor(0x00AE86);
        message.channel.send(hastebinembed);
    })
} catch  {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL : SERVICE UNAVAILABLE")
        .setColor(0x00AE86);
        message.channel.send(hastebinembed);

}
    
}
