const Discord = require("discord.js");
const hastebin = require("hastebin-gen");

module.exports = {
	name: "hastebin",
	description: "create a hastebin with the specified text",
	aliases: ["haste"],
	usage: "sudo hastebin <text>",
	type: "util",
	admin: false,

	run: async (client, message, args) => {
		try {
			const haste = args.join(" ");
			hastebin(haste)
				.then((r) => {
					const hastebinembed = new Discord.MessageEmbed()
						.setTitle("**Hastebin**")
						.addField("URL:", r)
						.setColor(client.serverconfig[message.guild.id].EmbedColor);
					message.channel.send(hastebinembed);
				})
				.catch(() => {
					return message.reply(":x: Hastebin Service Unavailable !");
				});
		} catch {
			const hastebinembed = new Discord.MessageEmbed()
				.setTitle("**Hastebin**")
				.addField("URL : SERVICE UNAVAILABLE")
				.setColor(client.serverconfig[message.guild.id].EmbedColor);
			message.channel.send(hastebinembed);
		}
	},
};
