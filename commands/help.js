exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .addFields(
    {name: "`sudo give <user> <amount>`", value : "Gives points to the tagged user (admin only)"},
    {name: "`sudo remove <user> <amount>`", value : "Removes points to the tagged user (admin only)"},
    {name: "`sudo nukepoints`", value : "Removes the points of all the users and resets the leaderboard (admin only)"},
    {name: "`sudo kick <@user> (reason)`", value : "Kicks a user (mod only)"},    
    {name: "`sudo ban <@user> (reason)`", value : "Bans a user (admin only)"}, 
    {name: "`sudo unban <user id> (reason)`", value : "Unbans a user (admin only)"}, 
    {name: "`sudo clear <number>`", value : "Delete the amount of message requested (mod only)"},
    {name: "`sudo points `", value : "Returns the points of the authors"},
    {name: "`sudo leaderboard `", value : "Returns the leaderboard of the server"},
    {name: "`sudo search <keyword> `", value : "Returns the result of a google search "})
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
    .setTitle(`📖 Help `) 
    .setColor(0x00AE86);    

    message.channel.send(embed)
}