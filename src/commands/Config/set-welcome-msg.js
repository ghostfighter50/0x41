const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports.run = (client, message, args) => {


	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Error`)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setTitle("✅ Succesfully set join message !");

	
	try {
		config[message.guild.id].JoinMessage = args.join(" ");

		fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}

};
module.exports = {
	name: 'set-welcome-msg',
	description: 'creates a custom welcome message {user} for the user\'s name and {guild} for the guild\'s name.',
	aliases: ['welcome-msg'],
	usage: 'sudo set-welcome-msg <message>',
	type: "config",
	admin:true,};