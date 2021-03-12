exports.run = (client, message, args) => {
	const Discord = require("discord.js");
	function checkDays(date) {
		let now = new Date();
		let diff = now.getTime() - date.getTime();
		let days = Math.floor(diff / 86400000);
		return days + (days == 1 ? " day" : " days") + " ago";
	}

	var emojis;
	if (message.guild.emojis.cache.size === 0) {
		emojis = "None";
	} else {
		emojis = message.guild.emojis.cache.size;
	}

	const embed = new Discord.MessageEmbed()
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setAuthor(
			message.guild.name,
			message.guild.iconURL()
				? message.guild.iconURL()
				: client.user.displayAvatarURL()
		)
		.setThumbnail(message.guild.iconURL())
		.addField(
			"Created",
			`${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(
				message.guild.createdAt
			)})`,
			true
		)
		.addField("ID", message.guild.id, true)
		.addField("Region", message.guild.region, true)
		.addField("User Count", message.guild.memberCount, true)
		.addField("Member Count", message.guild.members.cache.size, true)
		.addField(
			"Bot Count",
			message.guild.members.cache.filter((member) => member.user.bot).size,
			true
		)
		.addField("AFK Timeout", message.guild.afkTimeout / 60 + " minutes", true)
		.addField("Roles", message.guild.roles.cache.size, true)
		.addField("Channels", message.guild.channels.cache.size, true)
		.addField("Emojis", `${emojis}/100`, true)
		.addField("Verification Level", message.guild.verificationLevel, true);

	message.channel.send(embed);
	module.exports = {
		name: 'serverinfo',
		description: 'retrieves the server\'s informations',
		aliases: ['srv'],
		usage: client.config.prefix+'serverinfo',
		type: "util",
		admin:false
	};
};
