const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "set-leave-msg",
	description:
		"creates a custom leave message {user} for the user's name and {guild} for the guild's name.",
	aliases: ["leave-msg"],
	usage: "sudo set-leave-msg <message>",
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
			.setTitle("✅ Succesfully set leave message !");

		try {
			config[message.guild.id].LeaveMessage = args.join(" ");

			fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2));

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
