exports.run = async  (client, message) => {
  let args = message.content.split(' ').splice(2).join(' ')
  const serp = require("serp");
const Discord = require("discord.js")
var options = {
  host : "google.com",
  qs : {
    q : args,
    filter : 0,
    pws : 0
  },
  num : 20
};
const waitembed = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(`🔁 I'm preparing your search...`) 
.setColor(0x00AE86);
message.channel.send(waitembed)
const links = await serp.search(options)
const embed = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(`Google search results`) 
.setColor(0x00AE86);

links.forEach(link =>{ embed.addField( link.title,` (${link.url})`, false)
})
message.channel.send(embed)
}