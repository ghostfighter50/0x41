module.exports = {
	name: "leaderboard",
	description: "returns the leaderboard of the server",
	aliases: ["ld"],
	usage: "sudo leaderboard",
	type: "points",
	admin: false,
	async run(client, message, args) {
		const Discord = require("discord.js");

		const filtered = client.points
			.filter((p) => p.guild === message.guild.id)
			.array();

		const sorted = filtered.sort((a, b) => b.points - a.points);

		const top10 = sorted.splice(0, 10);
		if (client.serverconfig[message.guild.id].Levels == false)
			return message.reply(
				"Set the Leveling system with `sudo  set-level <1|2|3> <@role>`"
			);

		const embed = new Discord.MessageEmbed()
			.setTitle("Leaderboard")
			.setAuthor(client.user.username, message.guild.iconURL())
			.setDescription("Our top 10 points leaders!")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		for (const data of top10) {
			try {
				embed.addField(
					client.users.cache.get(data.user).tag,
					`${data.points} points `
				);
			} catch {
				embed.addField(`<@${data.user}>`, `${data.points} points`);
			}
		}
		message.channel.send({ embed });
	},
};
