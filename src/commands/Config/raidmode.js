const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "raidmode",
	description: "toggle the raidmode module",
	aliases: ["raid"],
	usage: "sudo raidmode <on|off>",
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
			.setTitle("✅ Succesfully changed raidmode  !");

		try {
			if (args[0] == "on") {
				client.serverconfig[message.guild.id].RaidMode = true;
				fs.writeFileSync(
					client.serverconfig.path,
					JSON.stringify(config, null, 2)
				);
			} else if (args[0] == "off") {
				client.serverconfig[message.guild.id].RaidMode = false;
				fs.writeFileSync(
					client.serverconfig.path,
					JSON.stringify(config, null, 2)
				);
			}
			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
