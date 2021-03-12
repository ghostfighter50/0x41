const Discord = require("discord.js");

module.exports.run = async (client, message) => {

	message.guild.channels.cache.forEach((c) => {
		if (c.name.startsWith("ticket-")) return c.delete();
	});
	let embed = new Discord.MessageEmbed()
		.setDescription("✅ Tickets were all deleted !")
		.setColor(client.serverconfig[message.guild.id].EmbedColor);
	await message.channel.send(embed);

};
module.exports = {
	name: 'close-all',
	description: 'deletes all the tickets',
	aliases: ['cl-all'],
	usage: 'sudo clear-all',
	type: "ticket",
	admin:true,};