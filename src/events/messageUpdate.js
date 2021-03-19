module.exports = async (client, oldmessage, message) => {
	const Discord = require("discord.js");

	if (message.content == " su") {
		return message.reply(
			new Discord.MessageEmbed()
				.setDescription(
					"```/bin/sh: exit code 0``` Full report : https://bit.ly/3kR9fll"
				)
				.setColor(client.config[message.guild.id].EmbedColor)
		);
	}
	if (
		message.content == `<@${client.user.id}>` ||
		message.content == `<@!${client.user.id}>` ||
		message.content == client.user.tag
	) {
		message.reply("my prefix is ``, try ` help` to see all my commands.");
	}
	if (message.author.bot) return;

	if (message.content.indexOf(client.config.prefix) !== 0) return;

	const args = message.content
		.slice(client.config.prefix.length)
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();
	const deniedembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle("❌ Acces Denied ! Required Permission : `ADMINISTRATOR` ")
		.setColor(client.serverconfig[message.guild.id].EmbedColor);
	const cmd =
		client.commands.get(command) ||
		client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(command));
	if (!cmd) return;

	if (cmd.admin == true && !message.member.hasPermission("ADMINISTRATOR")) {
		return message.channel.send(deniedembed);
	}

	await cmd.run(client, message, args);
};
