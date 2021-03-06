module.exports = async (client, member) => {
	const Discord = require("discord.js");
	if (client.serverconfig[member.guild.id].JoinLogger == false) return;
	const channel = member.guild.channels.cache.find(
		(c) => c.id == client.serverconfig[member.guild.id].WelcomeChannel
	);

	const embed = new Discord.MessageEmbed()
		.setDescription(
			client.serverconfig[member.guild.id].LeaveMessage.replace(
				"{user}",
				member.user.tag
			).replace("{guild}", member.guild.name)
		)
		.setColor(client.serverconfig[member.guild.id].EmbedColor)
		.setThumbnail(member.avatarURL);

	await channel.send(embed);
};
