exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField("** 🔨 Moderation**","`tempmute <@user> (reason)` `unmute <@user> (reason)` `mute <@user> (reason)` `kick <@user> (reason)` `kick <@user> (reason)` `unban <user id> (reason)` `clear <number>`", false)
    .addField("** ⚙️ Utilities**","`exec <command>` `stats` `userinfo <@user>` `serverinfo` `ping ` `hastebin <value>` `encode <base64|hex> <value>` `decode <base64|hex> <value>` `search <keyword>`",false)
    .addField("** 📊 Points**","`give <user> <amount>` `remove <user> <amount>` `nukepoints` `levels` `updateroles` `points` `verify <challenge-name> <flag> ` `leaderboard `", false)
    .setTitle(`📖 Help `) 
    .setColor(0x00AE86);    

    message.channel.send(embed)
}
