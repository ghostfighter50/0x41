exports.run = (client, message, args) => {
	const Discord = require("discord.js");
	const key = `${message.guild.id}-${message.author.id}`;
	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`Invite Me !`)
		.setURL(
			"https://discord.com/oauth2/authorize?client_id=759383573575892992&permissions=8&scope=bot"
		)
		.setColor(client.config[message.guild.id].EmbedColor)
		.setFooter("Made by Ghostfighter50");

	message.channel.send(embed);
};
