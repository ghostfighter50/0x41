
exports.run = async  (client, message) => {
    const Discord = require("discord.js")
   

    const infoembed = new Discord.MessageEmbed()
    .setTitle(`📚 Informations `)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setDescription("\n\n`() = optional` \n `<> = required`\n`< | > = possible values` \n  `@user/role = mention`\n`#channel = channel mention`  \n`prefix = sudo`")
    const modembed = new Discord.MessageEmbed()
    .setTitle(`🔨 Moderation`)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setDescription("\n\n`create-role <name>` = creates the specified role\n`mute-all` = mutes every user in the server\n`unmute-all` = unmutes every user in the server\n`tempmute <@user> (reason)` = mutes a user for a time period\n  `unmute <@user> (reason)` = unmutes an user\n  `mute <@user> (reason)` = mutes an user\n `kick <@user> (reason)` = kicks an user\n  `ban <@user> (reason)` = bans an user\n  `unban <user id> (reason)` = unbans an user\n  `clear <number>` = deletes the specified number if messages\n  `report <@user> <reason>` = reports an users ")
    const utilembed = new Discord.MessageEmbed()
    .setTitle(`⚙️ Utilities`)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setDescription("\n\n`exec <command>` = executes a UNIX command (dev only)\n  `stats` = sends the bot's stats\n  `userinfo <@user>` = sned the infos about the specified user\n  `serverinfo` = sends the server's informations\n  `ping ` = sends the bot's ping\n  `hastebin <value>` \n  `encode <base64|hex> <value>` = encode a value\n  `decode <base64|hex> <value>` = decode a value\n  `search <keyword>`\n`embed <content>` = sends an embed with the specified content \n `thm <user>` = sends the specified tryhackme user's badge ")
    const pointembed = new Discord.MessageEmbed()
    .setTitle(`📊 Points`)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setDescription("\n\n`give <@user> <amount>` = give points to an user\n  `remove <@user> <amount>` = remove points to an user\n  `nukepoints` = restart the database (dev only)\n  `levels` = sends the level roles\n  `updateroles` = gives you a role if you have enough points \n  `points` = retrieves your points \n  `verify <challenge-name> <flag> ` \n  `leaderboard ` = submits a flag  ")
    const ticketembed = new Discord.MessageEmbed()
    .setTitle(` 📩 Tickets`)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setDescription("\n\n`ticket` = open a ticket\n`close-all` = close each ticket")
    const configembed = new Discord.MessageEmbed()
    .setTitle(`🛠️ Config`)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setDescription("\n\n`set-autorole <@role>` = adds an autorole\n`clear-autorole` = deletes all of the autoroles\n `list-autorole` = lists autoroles\n `set-report <@channel>` = sets the report channel\n `set-welcome <@channel>` = sets the welcome channel\n `set-test <@channel>` = sets the skid-test channel\n `unset-test` = unsets the skid-test module\n`set-verified <@role>` = set a verified role\n`set-unverified <@role>` = set san unverified role\n`set-join` = sets the join logger \n`unset-join` = unsets the join logger\n`set-level <1|2|3> <@role>` = sets a level role (1 to 3) \n `unset-levels` = unsets the level module\n `set-color <color>` = sets an embed color\n `set-flag <name> <value> <points>` = sets a flag for a challenge\n `list-flags` = list the challenges of the server\n `clear-flags` = deletes all the flags of the server\n`config` = retrieves the config of the server")
    const reactembed = new Discord.MessageEmbed()
    .setTitle(`📖 Help `)
    .setFooter("Made by Ghostfighter50")
    .setColor(client.config [message.guild.id] .EmbedColor)
    .setDescription("\n** 📚 Informations **\n** 🔨 Moderation**\n** ⚙️ Utilities**\n** 📊 Points**\n** 📩 Tickets**\n** 🛠️ Config**")
    
     message.channel.send(reactembed).then(msg =>{
        msg.react('📚')
        msg.react('🔨')
        msg.react('⚙️')
        msg.react('📊')
        msg.react('📩')
        msg.react('🛠️')
 const filter = (reaction, user) => {
        if(user.id == msg.author.id) return
        reaction.users.remove(user)
        let emoji = reaction.emoji.name
        if(emoji == "📚"){msg.edit(infoembed)}
        else if(emoji == "🔨"){msg.edit(modembed)}
        else if(emoji == "⚙️"){msg.edit(utilembed)}
        else if(emoji == "📊"){msg.edit(pointembed)}
        else if(emoji == "📩"){msg.edit(ticketembed)}
        else if(emoji == "🛠️"){msg.edit(configembed)}
    };
 ;
    msg.awaitReactions(filter, {time : 60000}).then(collected => { })

     })
   
    

}
