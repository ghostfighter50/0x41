const Discord = require("discord.js");

module.exports = {
	name: "embed",
	description: "say the specified text in an embed",
	aliases: ["say-embed"],
	usage: "sudo embed <text>",
	type: "util",
	admin: false,

	run: async (client, message, args) => {
		let content = args.join(" ");
		let embed = new Discord.MessageEmbed()
			.setDescription(content)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		await message.channel.send(embed);
		await message.delete();
	},
};
