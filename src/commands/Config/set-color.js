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
		.setTitle("✅ Succesfully set embed color !");

	
	try {
		config[message.guild.id].EmbedColor = args[0];

		fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));

		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}

};
module.exports = {
	name: 'set-color',
	description: 'sets the color of the embeds.',
	aliases: ['color'],
	usage: 'sudo set-color <color hex>',
	type: "config",
	admin:true,};