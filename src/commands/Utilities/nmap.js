const childProcess = require("child_process");

module.exports = {
	name: "nmap",
	description: "scan a machine with nmap",
	aliases: ["scan"],
	usage: "sudo nmap <ip>",
	type: "util",
	admin: false,
	async run(client, message, args) {
		console.log(args[0]);
		const Discord = require("discord.js");
		if (!args[0]) return message.reply(":x: Enter a target !");
		childProcess.exec("nmap " + args[0], {}, (err, stdout, stderr) => {
			if (stderr) {
				return message.channel.send(
					new Discord.MessageEmbed()
						.setDescription("```" + stderr + "```")
						.setColor(client.serverconfig[message.guild.id].EmbedColor)
				);
			}
			message.channel.send(
				new Discord.MessageEmbed()
					.setDescription("```" + stdout + "```")
					.setColor(client.serverconfig[message.guild.id].EmbedColor)
			);
		});
	},
};
