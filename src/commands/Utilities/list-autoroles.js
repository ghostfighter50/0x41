const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports = {
	name: "list-autoroles",
	description: "lists the server's autoroles",
	aliases: ["l-auto"],
	usage: "sudo list-autoroles",
	type: "util",
	admin: false,
	run: (client, message, args) => {
		var i = 1;

		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle(`❌ Error ! `)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("Autoroles");

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
	},
};
