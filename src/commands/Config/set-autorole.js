const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

exports.run = (client, message, args) => {
	const deniedembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Acces Denied ! `)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(
			`❌ The role is equal or higher than the bot's highest Role or the role is not found ! `
		)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setTitle("✅ Succesfully set autorole !");

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send(deniedembed);

	try {
		let role = message.mentions.roles.first();
		config[message.guild.id].autoroles.push(role.id);

		fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}
	module.exports = {
		name: 'set-autorole',
		description: 'creates an autorole.',
		aliases: ['set-ar'],
		usage: client.config.prefix+'set-autorole <@role>',
		type: "config",
		admin:true
	};
};
