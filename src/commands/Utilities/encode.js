module.exports = {
	name: "encode",
	description: "encode a string",
	aliases: ["dcd"],
	usage: "sudo encode <base64|hex> <hash>",
	type: "util",
	admin: false,
	async run(client, message, args) {
		const Discord = require("discord.js");
		const base64 = Buffer.from(args[1]).toString("base64");
		const hex = Buffer.from(args[1]).toString("hex");

		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		if (args[0] == "base64") {
			embed.setTitle(base64);
			message.channel.send(embed);
		} else if (args[0] == "hex") {
			embed.setTitle(hex);
			message.channel.send(embed);
		} else {
			const error = new Discord.MessageEmbed()
				.setThumbnail(message.author.avatarURL)
				.setTitle("❌ Invalid Syntax  ! ")
				.setColor(client.serverconfig[message.guild.id].EmbedColor);
			return message.channel.send(error);
		}
	},
};
