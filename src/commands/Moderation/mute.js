const Discord = require("discord.js");

module.exports = {
	name: "mute",
	description: "mutes the specified user",
	aliases: ["m"],
	usage: "sudo mute <@user> (reason)",
	type: "mod",
	admin: true,

	run: async (client, message, args) => {
		let reason = args[1];
		if (reason == undefined) reason = "❌ No reason Supplied";
		if (!message.mentions.users.first()) {
			return message.reply("❌ Please mention someone to mute them");
		}
		const user = message.mentions.users.first();
		let muteRole = client.guilds.cache
			.get(message.guild.id)
			.roles.cache.find((val) => val.name === "Muted");
		if (message.author.id === message.mentions.users.first()) {
			return message.reply("❌ You can't mute yourself:facepalm:");
		}
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

		message.guild
			.member(user)
			.roles.add(muteRole)
			.then(() => {
				const embed = new Discord.MessageEmbed()
					.setColor(0x00ffff)
					.setTimestamp()
					.addField("Action:", "Mute")
					.addField(
						"User:",
						`${user.username}#${user.discriminator} (${user.id})`
					)
					.addField(
						"Moderator:",
						`${message.author.username}#${message.author.discriminator}`
					)
					.addField("Reason", reason)
					.setColor(client.serverconfig[message.guild.id].EmbedColor);
				message.channel.send({ embed });

				if (user.bot) return;
				message.mentions.users
					.first()
					.send({ embed })
					.catch((e) => {
						if (e) return;
					});
			});
	},
};
