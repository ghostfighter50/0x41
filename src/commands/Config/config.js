module.exports = {
	name: "config",
	description: "retrieves the server's configuration",
	aliases: ["c", "conf"],
	usage: "sudo config",
	type: "config",
	admin: false,
	run: async (client, message) => {
		const Discord = require("discord.js");
		let verified = message.guild.roles.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].VerifiedRole
		);
		let unverified = message.guild.roles.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].UnverifiedRole
		);
		let report = message.guild.channels.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].ReportChannel
		);
		let test = message.guild.channels.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].TestChannel
		);
		let welcome = message.guild.channels.cache.find(
			(r) => r.id == client.serverconfig[message.guild.id].WelcomeChannel
		);

		const embed = new Discord.MessageEmbed()
			.addField("** **", "** **", true)
			.setThumbnail(message.author.avatarURL)
			.addField("**Unverified Role**", unverified, true)
			.addField("**Verified Role **", verified, true)
			.addField(
				"**Levels**",
				client.serverconfig[message.guild.id].Levels,
				true
			)
			.addField("**Level Roles**", "**`sudo  levels`**", true)
			.addField(
				"**Anti-Skid Verification **",
				client.serverconfig[message.guild.id].SkidVerification,
				true
			)
			.addField(
				"**Join Logger **",
				client.serverconfig[message.guild.id].JoinLogger,
				true
			)
			.addField(
				"**Raid Mode **",
				client.serverconfig[message.guild.id].RaidMode,
				true
			)
			.addField("**Autoroles **", "**`sudo  list-autoroles`**", true)
			.addField("**Challenges/flags **", "**`sudo  list-flags`**", true)
			.addField("**Report Channel **", report, true)
			.addField("**Test Channel **", test, true)
			.addField("**Welcome Channel **", welcome, true)
			.addField(
				"**Join Message **",
				client.serverconfig[message.guild.id].JoinMessage,
				true
			)
			.addField(
				"**Leave Message **",
				client.serverconfig[message.guild.id].LeaveMessage,
				true
			)
			.addField(
				"**Embed color **",
				client.serverconfig[message.guild.id].EmbedColor,
				true
			)
			.setTitle(`📖 Config `)
			.setFooter("Made by Ghostfighter50 - https://the-0x41-bot.herokuapp.com/")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		message.channel.send(embed);
	},
};
