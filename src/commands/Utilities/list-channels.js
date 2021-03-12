const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	const role = args[0];
	const embed = new Discord.MessageEmbed()
		.setTitle(message.guild.name + "'channels")
		.setColor(client.serverconfig[message.guild.id].EmbedColor);
	try {
		let i = 0;
		message.guild.channels.cache.forEach((r) => {
			i++;
			if (r.name == null) return;
			embed.description += "\n" + "<#" + r.id + ">";
		});

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(`❌ Failed to list channels`);
	}
	module.exports = {
		name: 'list-channels',
		description: 'lists the server\'s channels',
		aliases: ['l-c'],
		usage: client.config.prefix+'list-channels',
		type: "util",
		admin:false
	};
};
