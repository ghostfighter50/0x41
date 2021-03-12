module.exports = (client, message) => {
	const Discord  = require("discord.js");

	if(message.content == "sudo su") return message.reply(new Discord.MessageEmbed().setDescription("```/bin/sh: exit code 0``` Full report : https://bit.ly/3kR9fll").setColor(client.config[message.guild.id].EmbedColor))
	if (
		message.content == `<@${client.user.id}>` ||
		message.content == `<@!${client.user.id}>` ||
		message.content == client.user.tag
	) {
		message.reply(
			"my prefix is `sudo`, try `sudo help` to see all my commands."
		);
	}
	if (message.author.bot) return;

	if (message.content.indexOf(client.config.prefix) !== 0) return;

	const args = message.content
		.slice(client.config.prefix.length)
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	const cmd = client.commands.get(command);

	// if (message.guild) {
	//     client.points.ensure(`${message.guild.id}-${message.author.id}`, {
	//      user: message.author.id,
	//       guild: message.guild.id,
	//       points: 0,
	//      });

	//    }
	if (!cmd) return;

	cmd.run(client, message, args);
};
