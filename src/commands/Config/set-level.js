const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
	name: "set-level",
	description: "creates a level role.",
	aliases: ["set-lvl"],
	usage: "sudo set-level <1|2|3> <points> <@role> ",
	type: "config",
	admin: true,
	async run(client, message, args) {
		const config = require("../../../serverconfig.json");

		const errorembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle(
				`❌ The role is equal or higher than the bot's highest Role or the role is not found ! `
			)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setTitle("✅ Succesfully set level role !");

		try {
			client.serverconfig[message.guild.id].Levels = true;
			if (!args[1]) args[1] = "10";
			let role = message.mentions.roles.first();
			if (args[0] == "1") {
				config[message.guild.id].LevelRoles.level1 = {
					id: role.id,
					points: args[1],
				};
			}
			if (args[0] == "2") {
				config[message.guild.id].LevelRoles.level2 = {
					id: role.id,
					points: args[1],
				};
			}
			if (args[0] == "3") {
				config[message.guild.id].LevelRoles.level3 = {
					id: role.id,
					points: args[1],
				};
			}
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
