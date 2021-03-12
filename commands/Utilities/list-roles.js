const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	const role = args[0];
	const embed = new Discord.MessageEmbed()
		.setTitle(message.guild.name + "'roles")
		.setColor(client.serverconfig[message.guild.id].EmbedColor);
	try {
		let i = 0;
		message.guild.roles.cache.forEach((r) => {
			i++;
			if (r.name == null) return;
			embed.description += "\n" + "<@&" + r.id + ">";
		});

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(`❌ Failed to list roles`);
	}
};