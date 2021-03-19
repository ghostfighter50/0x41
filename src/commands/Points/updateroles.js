module.exports = {
	name: "updateroles",
	description: "get roles for your amount of points",
	aliases: ["update"],
	usage: "sudo updateroles",
	type: "points",
	admin: false,
	run: async (client, message) => {
		const Discord = require("discord.js");

		const verified = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle("✅ Roles updated ! ")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const embed = new Discord.MessageEmbed()
			.setTitle("❌ Not enough points ")
			.setDescription("Don't give up, you can make those challenges !")
			.setThumbnail(message.guild.iconURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const user = message.author;
		const userPoints = client.points.get(
			`${message.guild.id}-${user.id}`,
			"points"
		);
		const member = message.member;
		if (client.serverconfig[message.guild.id].Levels == false) {
			return message.reply(
				"Set the Leveling system with `sudo  set-level <1|2|3> <@role>`"
			);
		}

		if (userPoints >= "100") {
			const Role = message.guild.roles.cache.get(
				client.serverconfig[message.guild.id].LevelRoles.level3.id
			);
			const removerole = message.guild.roles.cache.get(
				client.serverconfig[message.guild.id].LevelRoles.level2.id
			);
			member.roles.remove(removerole);
			member.roles.add(Role);
			message.channel.send(verified);
		} else if (userPoints >= "50") {
			const Role = message.guild.roles.cache.get(
				client.serverconfig[message.guild.id].LevelRoles.level2.id
			);
			const removerole = message.guild.roles.cache.get(
				client.serverconfig[message.guild.id].LevelRoles.level1.id
			);
			member.roles.remove(removerole);
			member.roles.add(Role);
			message.channel.send(verified);
		} else if (userPoints >= "20") {
			const Role = message.guild.roles.cache.get(
				client.serverconfig[message.guild.id].LevelRoles.level1.id
			);
			member.roles.add(Role);
			message.channel.send(verified);
		} else {
			const removerole = message.guild.roles.cache.get(
				client.serverconfig[message.guild.id].LevelRoles.level1.id
			);
			member.roles.remove(removerole);
			message.channel.send(embed);
		}
	},
};
