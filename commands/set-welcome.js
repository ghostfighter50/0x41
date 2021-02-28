const fs = require("fs");
const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
	const deniedembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Acces Denied ! `)
		.setColor(client.config[message.guild.id].EmbedColor);

	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Error`)
		.setColor(client.config[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.config[message.guild.id].EmbedColor)
		.setTitle("✅ Succesfully set welcome channel !");

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send(deniedembed);

	try {
		let channel = message.mentions.channels.first();
		config[message.guild.id].WelcomeChannel = channel.id;

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
