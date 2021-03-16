const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "set-report",
	description: "sets the report channel.",
	aliases: ["set-rp"],
	usage: "sudo set-report <#channel>",
	type: "config",
	admin: true,

	async run(client, message, args) {
		const config = require("../../../serverconfig.json");

		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle(`❌ Error`)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully set report channel !");

		try {
			let channel = message.mentions.channels.first();
			config[message.guild.id].ReportChannel = channel.id;

			fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2));

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
