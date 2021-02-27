const Discord = require("discord.js");
const hastebin = require('hastebin-gen');

exports.run = async (client, message, args) => {
   try {
       
  
    let haste = args.join(" ")
    hastebin(haste).then(r => {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL:", r)
        .setColor(client.config.EmbedColor);
        message.channel.send(hastebinembed);
    })
} catch  {
        let hastebinembed = new Discord.MessageEmbed()
        .setTitle("**Hastebin**")
        .addField("URL : SERVICE UNAVAILABLE")
        .setColor(client.config.EmbedColor);
        message.channel.send(hastebinembed);

}
    
}
