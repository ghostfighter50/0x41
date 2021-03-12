const Discord = require("discord.js");

exports.run = async (client, message) => {
	if (client.serverconfig[message.guild.id].VerifiedRole == "")
		return message.reply(
			":x: Set the verified (member) role ! `sudo set-verified <@role>`"
		);
	if (client.serverconfig[message.guild.id].UnverifiedRole == "")
		return message.reply(
			":x: Set the unverified role ! `sudo set-unverified <@role>`"
		);

	const TicketEmbed = new Discord.MessageEmbed()
		.setTitle("Tickets")
		.setDescription("React with 📩 to create a ticket")
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const CloseEmbed = new Discord.MessageEmbed()
		.setTitle("Close Ticket")
		.setDescription("React with 🔒 to close the ticket")
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	let TicketMessage = await message.channel.send(TicketEmbed);

	await TicketMessage.react("📩");

	TicketMessage.awaitReactions(
		(reaction, user) => user.id !== TicketMessage.author.id,
		{
			max: 1,
		}
	).then(async (collected) => {
		if (collected.first().emoji.name == "📩") {
			TicketMessage.delete();

			collected.first().remove();

			message.guild.channels
				.create("ticket-" + message.author.id)
				.then(async (channel) => {
					await channel.overwritePermissions([
						{
							id: message.author.id,
							allow: ["VIEW_CHANNEL"],
						},
						{
							id: client.serverconfig[message.guild.id].VerifiedRole,
							deny: ["VIEW_CHANNEL"],
						},
						{
							id: client.serverconfig[message.guild.id].UnverifiedRole,
							deny: ["VIEW_CHANNEL"],
						},
					]);
					await message.delete();

					let CloseMessage = await channel
						.send(CloseEmbed)
						.then(async (msg) => {
							await msg.react("🔒");
							await channel.send(message.author.toString());
							msg
								.awaitReactions(
									(reaction, user) => user.id !== client.user.id,
									{
										max: 1,
									}
								)
								.then(async (collected) => {
									if (collected.first().emoji.name == "🔒") {
										channel.delete();
									} else {
										collected.first().remove();
									}
								});
						});
				});
		} else {
			collected.first().remove();
		}
	});
	module.exports = {
		name: 'ticket',
		description: 'open a ticket',
		aliases: ['open', 't'],
		usage: client.config.prefix+'ticket',
		type: "ticket",
		admin:false
	};
};
