const Discord = require("discord.js");
const hastebin = require('hastebin-gen');

exports.run = async (client, message, args) => {
   try {
       
  
    let haste = args.slice(8)
    hastebin(haste).then(r => {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL:", r)
        .setURL("https://discord.gg/pU2JHgG5Mj")
        .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
        .setColor(0x00AE86);
        message.channel.send(hastebinembed);
    })
} catch  {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL : SERVICE UNAVAILABLE")
        .setURL("https://discord.gg/pU2JHgG5Mj")
        .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
        .setColor(0x00AE86);
        message.channel.send(hastebinembed);

}
    
}