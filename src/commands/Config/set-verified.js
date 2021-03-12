const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports.run = (client, message, args) => {


	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(
			`❌ The role is equal or higher than the bot's highest Role or the role is not found ! `
		)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setTitle("✅ Succesfully set verified role !");

	
	try {
		let role = message.mentions.roles.first();
		client.serverconfig[message.guild.id].VerifiedRole = role.id;

		fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}

};
module.exports = {
	name: 'set-verifie',
	description: 'sets the verified role',
	aliases: ['set-v'],
	usage: 'sudo set-verified <@channel>',
	type: "config",
	admin:true,};