module.exports = (client, oldmessage, newmessage) => {
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

	if (newmessage.content.indexOf(client.config.prefix) !== 0) return;

	const args = newmessage.content
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

	cmd.run(client, newmessage, args);
};
