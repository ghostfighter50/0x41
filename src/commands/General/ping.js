module.exports = {
	name: "ping",
	description: "get the bot`s ping",
	aliases: ["resp"],
	usage: "sudo ping",
	type: "gen",
	admin: false,
	run: (client, message) => {
		message.channel
			.send("Ping?")
			.then((m) =>
				m.edit(
					`API: ${
						m.createdTimestamp - message.createdTimestamp
					}ms. Web Socket: ${Math.round(client.ws.ping)}ms.`
				)
			);
	},
};
