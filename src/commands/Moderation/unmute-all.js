const Discord = require("discord.js");

module.exports = {
	name: "unmute-all",
	description: "unmutes everyone in the server",
	aliases: ["un-all"],
	usage: "sudo unmute-all",
	type: "mod",
	admin: true,
	run: async (client, message) => {
		let muteRole = client.guilds.cache
			.get(message.guild.id)
			.roles.cache.find((val) => val.name === "Muted");
		if (!muteRole) {
			try {
				muteRole = await message.guild.roles.create({
					data: {
						name: "Muted",
						color: "#000000",
						permissions: [],
					},
				});

				message.guild.channels.cache.forEach(async (channel, id) => {
					await channel.createOverwrite(muteRole, {
						SEND_MESSAGES: false,
						MANAGE_MESSAGES: false,
						READ_MESSAGES: false,
						ADD_REACTIONS: false,
					});
				});
			} catch (e) {
				console.log(e.stack);
			}
		}

		message.guild.members.cache.forEach((m) => {
			if (message.guild.member(m).roles.cache.has(muteRole.id)) {
				m.roles.remove(muteRole);
			}
		});
		const embed = new Discord.MessageEmbed()
			.setColor(0x00ffff)
			.setTimestamp()
			.addField("Action:", "Unmute All")
			.addField(
				"Moderator:",
				`${message.author.username}#${message.author.discriminator}`
			)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		message.channel.send({ embed });
	},
};
