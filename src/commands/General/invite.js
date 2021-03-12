module.exports.run = (client, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`Invite Me !`)
		.setURL(
			"https://discord.com/oauth2/authorize?client_id=759383573575892992&permissions=8&scope=bot"
		)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setFooter("Made by Ghostfighter50");

	message.channel.send(embed);
	
};
module.exports = {
	name: 'invite',
	description: 'get the invite link',
	aliases: ['inv'],
	usage: 'sudo invite',
	type: "gen",
	admin:false
};