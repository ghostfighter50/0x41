exports.run = (client, message) => {
	message.channel
		.send("Ping?")
		.then((m) =>
			m.edit(
				`API: ${
					m.createdTimestamp - message.createdTimestamp
				}ms. Web Socket: ${Math.round(client.ws.ping)}ms.`
			)
		);
		module.exports = {
			name: 'ping',
			description: 'get the bot`s ping',
			aliases: ['resp'],
			usage: client.config.prefix+'ping',
			type: "gen",
			admin:false
		};
};
