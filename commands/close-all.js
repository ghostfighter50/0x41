const Discord = require("discord.js");

exports.run = async (client, message) => {

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.reply("❌ you can't use this command.");
   message.guild.channels.forEach(c => {
    if(c.name.startWith("ticket-")) return c.delete()
})
}
