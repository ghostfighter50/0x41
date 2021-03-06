module.exports = {
	name: "levels",
	description: "returns the server's level roles",
	aliases: ["lvl"],
	usage: "sudo levels",
	type: "points",
	admin: false,
	run: async (client, message) => {
		const Discord = require("discord.js");
		const level1 = message.guild.roles.cache.get(
			client.serverconfig[message.guild.id].LevelRoles.level1.id
		);
		const level2 = message.guild.roles.cache.get(
			client.serverconfig[message.guild.id].LevelRoles.level2.id
		);
		const level3 = message.guild.roles.cache.get(
			client.serverconfig[message.guild.id].LevelRoles.level3.id
		);
		if (level1 == undefined) {
			return message.reply(
				":x: you must set the 3 level roles before using command `sudo  set-level <1|2|3> <points> <@role>`"
			);
		} else if (level2 == undefined) {
			return message.reply(
				":x: you must set the 2 level roles before using command `sudo  set-level <1|2|3> <points> <@role>`"
			);
		} else if (level3 == undefined) {
			return message.reply(
				":x: you must set the 1 level roles before using command `sudo  set-level <1|2|3> <points> <@role>`"
			);
		}

		if (client.serverconfig[message.guild.id].Levels == false) {
			return message.reply(
				"Set the Leveling system with `sudo  set-level <1|2|3> <points> <@role>`"
			);
		}
		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.addFields(
				{
					name: "1 " + level1.name,
					value:
						client.serverconfig[message.guild.id].LevelRoles.level1.points +
						" points",
				},
				{
					name: "2 " + level2.name,
					value:
						client.serverconfig[message.guild.id].LevelRoles.level2.points +
						" points",
				},
				{
					name: "3 " + level3.name,
					value:
						client.serverconfig[message.guild.id].LevelRoles.level3.points +
						" points",
				}
			)
			.setTitle("📖 Levels ")
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setFooter("Do sudo  set-level <1|2|3> <points> <@role> to set a level");

		message.channel.send(embed);
	},
};
