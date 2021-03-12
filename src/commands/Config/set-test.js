const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports = {
	name: "set-test",
	description: "sets the channel for the script kiddie test.",
	aliases: ["set-skid"],
	usage: "sudo set-test <#channel>",
	type: "config",
	admin: true,
	run: (client, message, args) => {
		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle(`❌ Error`)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully set test channel !");

		try {
			let channel = message.mentions.channels.first();
			config[message.guild.id].TestChannel = channel.id;
			config[message.guild.id].SkidVerification = true;

			fs.writeFileSync(
				client.serverconfig.path,
				JSON.stringify(config, null, 2)
			);

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
