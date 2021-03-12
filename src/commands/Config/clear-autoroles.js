const fs = require("fs");
const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports.run = (client, message, args) => {


	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Error ! `)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setTitle("✅ Succesfully cleared autorole !");

	
	try {
		let role = message.mentions.roles.first();
		config[message.guild.id].autoroles = [];
		fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}

};
module.exports = {
	name: 'clear-autoroles',
	description: 'deletes all of the autoroles.',
	aliases: ['del-autoroles'],
	usage: 'sudo clear-autoroles',
	type: "config",
	admin:true,};