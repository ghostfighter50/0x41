module.exports = {
	name: "dashboard",
	description: "get the dashboard link",
	aliases: ["panel"],
	usage: "sudo dashboard",
	type: "gen",
	admin: false,
	async run(client, message, args) {
		const Discord = require("discord.js");
		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle(`Dashboard`)
			.setURL(
				"https://www.the-0x41-bot.herokuapp.com/"
			)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setFooter("Made by Ghostfighter50 - [Dashboard] (https://the-0x41-bot.herokuapp.com/)");

		message.channel.send(embed);
	},
};
