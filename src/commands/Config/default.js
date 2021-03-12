const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports = {
	name: "default",
	description: "resets the server's settings",
	aliases: ["def"],
	usage: "sudo default",
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
			.setTitle("✅ Succesfully set settings to default !");

		try {
			config[guild.id] = {};
			config[guild.id].JoinMessage = "Welcome {user} to {guild}";
			config[guild.id].LeaveMessage = ":x: {user} left...";
			config[guild.id].RaidMode = false;
			config[guild.id].Levels = false;
			config[guild.id].JoinLogger = true;
			config[guild.id].SkidVerification = false;
			config[guild.id].WelcomeChannel = "";
			config[guild.id].ReportChannel = "";
			config[guild.id].TestChannel = "";
			config[guild.id].autoroles = [];
			config[guild.id].VerifiedRole = "";
			config[guild.id].UnverifiedRole = "";
			config[guild.id].EmbedColor = "0x00AE86";
			config[guild.id].LevelRoles = {};
			config[guild.id].LevelRoles.level1 = "";
			config[guild.id].LevelRoles.level2 = "";
			config[guild.id].LevelRoles.level3 = "";
			config[guild.id].Flags = [{}];
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
