const Discord = require("discord.js");
const hastebin = require("hastebin-gen");

exports.run = async (client, message, args) => {
	try {
		let haste = args.join(" ");
		hastebin(haste)
			.then((r) => {
				let hastebinembed = new Discord.MessageEmbed()
					.setTitle("**Hastebin**")
					.addField("URL:", r)
					.setColor(client.serverconfig[message.guild.id].EmbedColor);
				message.channel.send(hastebinembed);
			})
			.catch(() => {
				return message.reply(":x: Service Unavailable !");
			});
	} catch {
		let hastebinembed = new Discord.MessageEmbed()
			.setTitle("**Hastebin**")
			.addField("URL : SERVICE UNAVAILABLE")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		message.channel.send(hastebinembed);
	}
};
