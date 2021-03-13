const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "unset-test",
	description: "unsets the script kiddie test module",
	aliases: ["un-skid"],
	usage: "sudo unset-test",
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
			.setTitle("✅ Succesfully unset test !");

		try {
			let channel = message.mentions.channels.first();
			config[message.guild.id].TestChannel = "";
			config[message.guild.id].SkidVerification = false;
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
