const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	const role = args[0];
	const embed = new Discord.MessageEmbed()
		.setTitle(message.guild.name + "'channels")
		.setColor(client.config[message.guild.id].EmbedColor);
	try {
		let i = 0;
		message.guild.channels.cache.forEach((r) => {
			i++;
			if (r.name == null) return;
			embed.description += "\n" + "<#" +r.id+ ">";
		});

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(`❌ Failed to list channels`);
	}
};
