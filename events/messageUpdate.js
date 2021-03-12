module.exports = (client, oldmessage, newmessage) => {
	const Discord = require("discord.js");

	if (newmessage.content == "sudo su")
		return newmessage.reply(
			new Discord.MessageEmbed()
				.setDescription(
					"```/bin/sh: exit code 0``` Full report : https://bit.ly/3kR9fll"
				)
				.setColor(client.serverconfig[message.guild.id].EmbedColor)
		);
	if (
		newmessage.content == `<@${client.user.id}>` ||
		newmessage.content == `<@!${client.user.id}>` ||
		newmessage.content == client.user.tag
	) {
		newmessage.reply(
			"my prefix is `sudo`, try `sudo help` to see all my commands."
		);
	}
	if (newmessage.author.bot) return;

	if (newmessage.content.indexOf(client.serverconfig.prefix) !== 0) return;

	const args = newmessage.content
		.slice(client.serverconfig.prefix.length)
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

	cmd.run(client, newmessage, args);
};
