const Discord = require("discord.js");

exports.run = async (client, message) => {

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.reply("❌ you can't use this command.");
   message.guild.channels.cache.forEach(c => {
    if(c.name.startsWith("ticket-")) return c.delete()
})
let embed = new Discord.MessageEmbed()
      .setDescription("✅ Tickets were all deleted !")
      .setColor(client.config.EmbedColor)
    await message.channel.send(embed)
}
