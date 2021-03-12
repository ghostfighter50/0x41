const Discord = require("discord.js");
exports.run = async (client, message) => {
	const deniedembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Acces Denied ! `)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);
	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send(deniedembed);
	let muteRole = client.guilds.cache
		.get(message.guild.id)
		.roles.cache.find((val) => val.name === "Muted");
	if (message.author.id === message.mentions.users.first())
		return message.reply("❌ You can't mute yourself:facepalm:");
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

	message.guild.members.cache.forEach((m) => m.roles.add(muteRole));
	const embed = new Discord.MessageEmbed()
		.setColor(0x00ffff)
		.setTimestamp()
		.addField("Action:", "Mute All")
		.addField(
			"Moderator:",
			`${message.author.username}#${message.author.discriminator}`
		)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);
	message.channel.send({ embed });
	module.exports = {
		name: 'mute-all',
		description: 'mutes everyone on the server',
		aliases: ['m-all'],
		usage: client.config.prefix+'mute-all',
		type: "mod",
		admin:true
	};
};
