module.exports = {
	name: "points",
	description: "returns your points",
	aliases: ["p"],
	usage: "sudo points",
	type: "points",
	admin: false,
	async run(client, message, args) {
		if (client.serverconfig[message.guild.id].Levels == false) {
			return message.reply(
				"Set the Leveling system with `sudo  set-level <1|2|3> <points> <@role>`"
			);
		}

		const Discord = require("discord.js");
		const key = `${message.guild.id}-${message.author.id}`;
		const embed = new Discord.MessageEmbed()
			.addField("\n\n**Points** : ", `${client.points.get(key, "points")}`)
			.setThumbnail(message.author.avatarURL)
			.setTitle(`${message.author.username}'s points`)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		message.channel.send(embed);
	},
};
