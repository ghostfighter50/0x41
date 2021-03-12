const Discord = require("discord.js");

exports.run = async (client, message) => {
	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.reply("❌ you can't use this command.");
	message.guild.channels.cache.forEach((c) => {
		if (c.name.startsWith("ticket-")) return c.delete();
	});
	let embed = new Discord.MessageEmbed()
		.setDescription("✅ Tickets were all deleted !")
		.setColor(client.serverconfig[message.guild.id].EmbedColor);
	await message.channel.send(embed);
	module.exports = {
		name: 'close-all',
		description: 'deletes all the tickets',
		aliases: ['cl-all'],
		usage: client.config.prefix+'clear-all',
		type: "ticket",
		admin:true
	};
};
