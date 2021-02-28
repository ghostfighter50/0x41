module.exports = async (client, member) => {
	const Discord = require("discord.js");
	if (client.config[member.guild.id].JoinMessage == false) return;
	let channel = member.guild.channels.cache.find(
		(c) => c.id == client.config[member.guild.id].WelcomeChannel
	);

	let embed = new Discord.MessageEmbed()
		.setDescription(
			client.config[member.guild.id].LeaveMessage.replace(
				"{user}",
				member
			).replace("{guild}", member.guild.name)
		)
		.setColor(client.config[member.guild.id].EmbedColor)
		.setThumbnail(member.avatarURL);

	await channel.send(embed);
};
