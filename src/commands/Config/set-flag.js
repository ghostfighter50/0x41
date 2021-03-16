const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "set-flag",
	description: "creates a challenge",
	aliases: ["set-f", "create-flag", "create-chall"],
	usage: "sudo set-flag <name> <value> <points>",
	type: "config",
	admin: true,
	async run(client, message, args) {
		const config = require("../../../serverconfig.json");

		if (client.serverconfig[message.guild.id].Levels == false)
			return message.reply(
				"Set the Leveling system with `sudo  set-level <1|2|3> <points> <@role>`"
			);

		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle(`❌ Error ! `)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully set flag !");

		try {
			if (!args[0]) return message.channel.send(errorembed);
			if (!args[1]) return message.channel.send(errorembed);
			if (!args[2]) return message.channel.send(errorembed);
			config[message.guild.id].Flags.push({
				name: args[0],
				value: args[1],
				points: args[2],
			});

			fs.writeFileSync(client.config.path, JSON.stringify(config, null, 2));

			message.channel.send(embed);
		} catch (e) {
			console.log(e);
			message.channel.send(errorembed);
		}
	},
};
