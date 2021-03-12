const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

exports.run = (client, message, args) => {
	var i = 1;
	const deniedembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Acces Denied ! `)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Error ! `)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setTitle("Autoroles");

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send(deniedembed);

	try {
		config[message.guild.id].autoroles.forEach((r) => {
			let role = message.guild.roles.cache.find((role) => role.id == r);
			embed.addField("Role " + i++, role, true);
		});
		if (config[message.guild.id].autoroles.length == 0)
			embed.addField("Role 1 :", "No roles !", true);

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}
	module.exports = {
		name: 'list-autoroles',
		description: 'lists the server\'s autoroles',
		aliases: ['l-auto'],
		usage: client.config.prefix+'list-autoroles',
		type: "util",
		admin:false
	};
};
