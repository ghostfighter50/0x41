const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports = {
	name: "unset-join",
	description: "unsets the join logger",
	aliases: ["un-join"],
	usage: "sudo unset-join",
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
			.setTitle("✅ Succesfully unset join messages !");

		try {
			client.serverconfig[message.guild.id].JoinMessage = false;

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
