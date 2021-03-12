const Discord = require("discord.js");
const config = require("../../../serverconfig.json");

module.exports.run = (client, message, args) => {
	var i = 1;
	if (client.serverconfig[message.guild.id].Levels == false)
		return message.reply(
			"Set the Leveling system with `sudo  set-level <1|2|3> <points> <@role>`"
		);



	const errorembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Error ! `)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	const embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setTitle("Flags")
		.setFooter("Use `sudo  set-flag <name> <value> <points>` to create a flag");

		try {
		if (config[message.guild.id].Flags.length == 1) {
			embed.addField("Flags :", "No Flags !", true);
			return message.channel.send(embed);
		}
		config[message.guild.id].Flags.forEach((flag) => {
			if (flag.name == undefined) return;
			embed.addField(
				"Flag " + i++,
				"**Name :** " +
					"`" +
					flag.name +
					"`" +
					"**Value :** " +
					"`" +
					flag.value +
					"`" +
					" **Points :** " +
					"`" +
					flag.points +
					"`",
				false
			);
		});
		message.channel.send(embed);
	} catch (e) {
		console.log(e);
		message.channel.send(errorembed);
	}

};
module.exports = {
	name: 'list-flags',
	description: 'lists the flags/challenges.',
	aliases: ['list-f', 'l-f', 'list-challs'],
	usage: 'sudo list-flags',
	type: "config",
	admin:true,};