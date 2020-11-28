var shortUrl = require('node-url-shortener');
let Discord = require("discord.js")

exports.run = (client, message, args) => {
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)

    .setFooter("Dystopia : https://discord.gg/pU2JHgG5Mj")
 
    .setColor(0x00AE86);

shortUrl.short(args[0], (err, url)=>{
if(err) return console.log(err)
embed.setTitle('✅ New URL : '+ url) 
.setURL(url)
message.channel.send(embed)
})

}