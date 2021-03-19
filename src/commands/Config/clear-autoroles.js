const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "clear-autoroles",
	description: "deletes all of the autoroles.",
	aliases: ["del-autoroles"],
	usage: "sudo clear-autoroles",
	type: "config",
	admin: true,
	async run(client, message, args) {
		const config = require("../../../serverconfig.json");
		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle("❌ Error ! ")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully cleared autorole !");

		try {
			const role = message.mentions.roles.first();
			config[message.guild.id].autoroles = [];
			fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2));

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
