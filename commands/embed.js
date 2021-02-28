const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	let content = args.join(" ");
	let embed = new Discord.MessageEmbed()
		.setDescription(content)
		.setColor(client.config[message.guild.id].EmbedColor);
	await message.channel.send(embed);
	await message.delete();
};
