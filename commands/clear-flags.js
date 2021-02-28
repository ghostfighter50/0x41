const fs = require("fs");
const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
	if (client.config[message.guild.id].Levels == false)
		return message.reply(
			"Set the Leveling system with `sudo set-level <1|2|3> <points> <@role>`"
		);

	const deniedembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Acces Denied ! `)
		.setColor(client.config[message.guild.id].EmbedColor);

	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Error ! `)
		.setColor(client.config[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.config[message.guild.id].EmbedColor)
		.setTitle("✅ Succesfully cleared flags !");

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send(deniedembed);

	try {
		config[message.guild.id].Flags = [];

		fs.writeFileSync(
			client.config.path
,
			JSON.stringify(config, null, 2)
		);

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}
};
