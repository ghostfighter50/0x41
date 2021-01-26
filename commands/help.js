exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("**Points**","`sudo give <user> <amount>` `sudo remove <user> <amount>` `sudo nukepoints` `sudo levels` `sudo updateroles` `sudo points` `sudo verify <challenge-name> <flag> ` `sudo leaderboard `", false)
    .addField("**Moderation**","`sudo tempmute <@user> (reason)` `sudo unmute <@user> (reason)` `sudo mute <@user> (reason)` `sudo kick <@user> (reason)` `sudo kick <@user> (reason)` `sudo unban <user id> (reason)` `sudo clear <number>`", false)
    .addField("**Utilities**","`sudo exec <command>` `sudo stats` `sudo userinfo <@user>` `sudo serverinfo` `sudo ping ` `sudo hastebin <value>` `sudo encode <base64|hex> <value>` `sudo decode <base64|hex> <value>` `sudo search <keyword>`",false)
    .setTitle(`📖 Help `) 
    .setColor(0x00AE86);    

    message.channel.send(embed)
}
