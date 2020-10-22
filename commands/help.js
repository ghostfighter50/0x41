exports.run = async  (client, message) => {
    const Discord = require("discord.js")
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL)
    .setURL("https://discord.gg/s6aFpGq")
    .addFields(
    {name: "`sudo give <user> <amount>`", value : "Gives points to the tagged user (admin only)"},
    {name: "`sudo remove <user> <amount>`", value : "Removes points to the tagged user (admin only)"},
    {name: "`sudo nukepoints`", value : "Removes the points of all the users and resets the leaderboard (admin only)"},
    {name: "`sudo exec`", value : "Executes a command on the VPS (admin only)"},
    {name: "`sudo nukepoints`", value : "Removes the points of all the users and resets the leaderboard (admin only)"},
    {name: "`sudo tempmute <@user> (reason)`", value : "Temp mutes a user (mod only)"},  
    {name: "`sudo unmute <@user> (reason)`", value : "Unmutes a user (mod only)"},    
    {name: "`sudo mute <@user> (reason)`", value : "Mutes a user (mod only)"}, 
    {name: "`sudo rename <@user> <new-nickname>`", value : "Changes the nickname of a user (mod only)"}, 
    {name: "`sudo kick <@user> (reason)`", value : "Kicks a user (mod only)"},      
    {name: "`sudo ban <@user> (reason)`", value : "Bans a user (admin only)"}, 
    {name: "`sudo unban <user id> (reason)`", value : "Unbans a user (admin only)"}, 
    {name: "`sudo clear <number>`", value : "Delete the amount of message requested (mod only)"},
    {name: "`sudo stats `", value : "Shows the bot's stats"},
    {name: "`sudo userinfo (@user) `", value : "Returns the infos about a user"},
    {name: "`sudo ping `", value : "Returns the ping of the bot and the API"},
    {name: "`sudo hastebin <value> `", value : "Returns the hastebin url of the string"},
    {name: "`sudo encode base64|hex <value> `", value : "Returns the encoded value of a string"},
    {name: "`sudo decode base64|hex <value> `", value : "Returns the decoded value of a hash"},
    {name: "`sudo leaderboard `", value : "Returns the leaderboard of the server"},
    {name: "`sudo verify <challenge-name> <flag> `", value : "Submits the flag of a challenge/ctf"},
    {name: "`sudo updateroles `", value : "Gives the role of your points"},
    {name: "`sudo search <keyword> `", value : "Returns the result of a google search "})
    .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
    .setTitle(`📖 Help `) 
    .setColor(0x00AE86);    

    message.channel.send(embed)
}