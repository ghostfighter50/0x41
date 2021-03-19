const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "set-autorole",
	description: "creates an autorole.",
	aliases: ["set-ar"],
	usage: "sudo set-autorole <@role>",
	type: "config",
	admin: true,
	async run(client, message, args) {
		const config = require("../../../serverconfig.json");

		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle(
				"❌ The role is equal or higher than the bot's highest Role or the role is not found ! "
			)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully set autorole !");

		try {
			const role = message.mentions.roles.first();
			config[message.guild.id].autoroles.push(role.id);

			fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2));

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
