exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .addField("** **", "** **",true)
    .setThumbnail(message.author.avatarURL)
    .addField("\n\n** 📚 Informations **","`() = optional` \n `<> = required`\n`< | > = possible values` \n  `@user/role = mention`\n`#channel = channel mention`  \n`prefix = sudo`")
    .addField("** **", "** **", true)
    .addField("** 🔨 Moderation**","`tempmute <@user> (reason)` \n  `unmute <@user> (reason)` \n  `mute <@user> (reason)` \n  `kick <@user> (reason)` \n  `kick <@user> (reason)` \n  `unban <user id> (reason)` \n  `clear <number>`\n  `report <@user> <reason>`  ", false)
    .addField("** **", "** **", true)
    .addField("** ⚙️ Utilities**","`exec <command>` \n  `stats` \n  `userinfo <@user>` \n  `serverinfo` \n  `ping ` \n  `hastebin <value>` \n  `encode <base64|hex> <value>` \n  `decode <base64|hex> <value>` \n  `search <keyword>`\n`embed <content>`  \n `thm <user>`  ",false)
    .addField("** **", "** **", true)
    .addField("** 📊 Points**","`give <user> <amount>` \n  `remove <user> <amount>` \n  `nukepoints` \n  `levels` \n  `updateroles` \n  `points` \n  `verify <challenge-name> <flag> ` \n  `leaderboard `  ", false)
    .addField("** **", "** **", true)
    .addField("** 📩 Tickets**","`ticket`\n`close-all`",false)
    .addField("** 🛠️ Config**","`set-autorole <@role>` \n`clear-autorole` \n `list-autorole` \n `set-report <@channel>` \n `set-welcome <@channel>` \n `set-test <@channel>` \n`set-verified <@role>` \n`set-unverified <@role>` \n`set-join` \n`unset-join`\n`set-level <1|2|3> <@role>` \n`config`",false)
    .addField("** **", "** **", true)
    .setTitle(`📖 Help `)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor);    

    message.channel.send(embed)
}
