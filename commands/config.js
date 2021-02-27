exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .addField("** **", "** **",true)
    .setThumbnail(message.author.avatarURL)
    .addField("**UnverifiedRole**", "** **", true)
    .addField("**VerifiedRole **", "** **", true)
    .addField("**Join Message **", client.config [message.guild.id] .JoinMessage, true)
    .addField("**Autoroles **", "**`sudo list-autoroles`**", true)
    .addField("**Report Channel **", "** **", true)
    .addField("**Test Channel **", "** **", true)
    .addField("**Welcome Channel **", "** **", true)
    .addField("**Embed color **",client.config [message.guild.id] .EmbedColor , true)
    .setTitle(`📖 Config `)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor);    

    message.channel.send(embed)
}
