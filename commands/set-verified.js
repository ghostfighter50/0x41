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
		.setTitle(
			`❌ The role is equal or higher than the bot's highest Role or the role is not found ! `
		)
		.setColor(client.config[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.config[message.guild.id].EmbedColor)
		.setTitle("✅ Succesfully set verified role !");

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send(deniedembed);

	try {
		let role = message.mentions.roles.first();
		client.config[message.guild.id].VerifiedRole = role.id;

		fs.writeFileSync(
			"/root/Downloads/0x41/config.json",
			JSON.stringify(config, null, 2)
		);

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}
};
