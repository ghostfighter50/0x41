const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_ROLES"))
		return message.reply("❌ you can't use this command.");

	const role = args[0];
	const embed = new Discord.MessageEmbed()
		.setTitle("✅ Deleted a role succesfully")
		.setColor(client.config[message.guild.id].EmbedColor);
	try {
		message.guild.roles.cache
			.find((r) => r.id == message.mentions.roles.first().id)
			.delete();

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(`❌ Failed to delete role ${args[0]}`);
	}
};
