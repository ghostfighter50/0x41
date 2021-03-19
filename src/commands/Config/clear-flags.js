const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "clear-autoroles",
	description: "deletes all of the flags.",
	aliases: ["del-flags"],
	usage: "sudo clear-flags",
	type: "config",
	admin: true,
	async run(client, message, args) {
		const config = require("../../../serverconfig.json");

		if (client.serverconfig[message.guild.id].Levels == false) {
			return message.reply(
				"Set the Leveling system with `sudo  set-level <1|2|3> <points> <@role>`"
			);
		}

		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle("❌ Error ! ")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully cleared flags !");

		try {
			config[message.guild.id].Flags = [];

			fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2));

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
