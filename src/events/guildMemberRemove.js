module.exports = async (client, member) => {
	const Discord = require("discord.js");
	if (client.serverconfig[member.guild.id].JoinMessage == false) return;
	let channel = member.guild.channels.cache.find(
		(c) => c.id == client.serverconfig[member.guild.id].WelcomeChannel
	);

	let embed = new Discord.MessageEmbed()
		.setDescription(
			client.serverconfig[member.guild.id].LeaveMessage.replace(
				"{user}",
				member.name
			).replace("{guild}", member.guild.name)
		)
		.setColor(client.serverconfig[member.guild.id].EmbedColor)
		.setThumbnail(member.avatarURL);

	await channel.send(embed);
};
