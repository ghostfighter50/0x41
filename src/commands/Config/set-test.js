const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "set-test",
	description: "sets the channel for the script kiddie test.",
	aliases: ["set-skid"],
	usage: "sudo set-test <#channel>",
	type: "config",
	admin: true,
	async run(client, message, args) {
		const config = require("../../../serverconfig.json");

		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle("❌ Error")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully set test channel !");

		try {
			const channel = message.mentions.channels.first();
			config[message.guild.id].TestChannel = channel.id;
			config[message.guild.id].SkidVerification = true;

			fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2));

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
