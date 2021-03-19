module.exports = {
	name: "config",
	description: "retrieves the server's configuration",
	aliases: ["c", "conf"],
	usage: "sudo config",
	type: "config",
	admin: false,
	run: async (client, message) => {
		const Discord = require("discord.js");
		const verified = message.guild.roles.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].VerifiedRole
		);
		const unverified = message.guild.roles.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].UnverifiedRole
		);
		const report = message.guild.channels.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].ReportChannel
		);
		const test = message.guild.channels.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].TestChannel
		);
		const welcome = message.guild.channels.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].WelcomeChannel
		);

		const embed = new Discord.MessageEmbed()
			.addField("** **", "** **", true)
			.setThumbnail(message.author.avatarURL)
			.addField("**Unverified Role**", unverified || "false", true)
			.addField("**Verified Role **", verified || "false", true)
			.addField(
				"**Levels**",
				client.serverconfig[message.guild.id].Levels
					? client.serverconfig[message.guild.id].Levels
					: "false",
				true
			)
			.addField("**Level Roles**", "**`sudo  levels`**", true)
			.addField(
				"**Anti-Skid Verification **",
				client.serverconfig[message.guild.id].SkidVerification
					? client.serverconfig[message.guild.id].SkidVerification
					: "false",
				true
			)
			.addField(
				"**Join Logger **",
				client.serverconfig[message.guild.id].JoinLogger
					? client.serverconfig[message.guild.id].JoinLogger
					: "false",
				true
			)
			.addField(
				"**Raid Mode **",
				client.serverconfig[message.guild.id].RaidMode
					? client.serverconfig[message.guild.id].RaidMode
					: "false",
				true
			)
			.addField("**Autoroles **", "**`sudo  list-autoroles`**", true)
			.addField("**Challenges/flags **", "**`sudo  list-flags`**", true)
			.addField("**Report Channel **", report || "none", true)
			.addField("**Test Channel **", test || "none", true)
			.addField("**Welcome Channel **", welcome || "none", true)
			.addField(
				"**Join Message **",
				client.serverconfig[message.guild.id].JoinMessage
					? client.serverconfig[message.guild.id].JoinMessage
					: "none",
				true
			)
			.addField(
				"**Leave Message **",
				client.serverconfig[message.guild.id].LeaveMessage
					? client.serverconfig[message.guild.id].LeaveMessage
					: "none",
				true
			)
			.addField(
				"**Embed color **",
				client.serverconfig[message.guild.id].EmbedColor
					? client.serverconfig[message.guild.id].EmbedColor
					: "none",
				true
			)
			.setTitle("📖 Config ")
			.setFooter("Made by Ghostfighter50 - https://the-0x41-bot.herokuapp.com/")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		message.channel.send(embed);
	},
};
