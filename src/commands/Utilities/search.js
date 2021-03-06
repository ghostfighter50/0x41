module.exports = {
	name: "search",
	description: "make a google search",
	aliases: ["google"],
	usage: "sudo search <keyword>",
	type: "util",
	admin: false,
	run: async (client, message) => {
		const args = message.content.split(" ").splice(2).join(" ");
		const serp = require("serp");
		const Discord = require("discord.js");
		const options = {
			host: "google.com",
			qs: {
				q: args,
				filter: 0,
				pws: 0,
			},
			num: 10,
		};
		const waitembed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle("🔁 I'm preparing your search...")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		message.channel.send(waitembed);
		const links = await serp.search(options);
		const embed = new Discord.MessageEmbed()
			.setThumbnail(message.author.avatarURL)
			.setTitle("Google search results")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		links.forEach((link) => {
			embed.addField(link.title, ` (${link.url.slice(30)})`, false);
		});
		message.channel.send(embed);
	},
};
