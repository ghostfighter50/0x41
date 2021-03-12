const childProcess = require("child_process");

module.exports = {
	name: "exec",
	description: "executes the specified command",
	aliases: ["execute"],
	usage: "sudo exec <command>",
	type: "dev",
	admin: false,
	run: (client, message, args) => {
		const Discord = require("discord.js");

		if (message.author.id == "655346300958670848") {
			childProcess.exec(args.join(" "), {}, (err, stdout, stderr) => {
				if (stderr)
					return message.channel.send(
						new Discord.MessageEmbed()
							.setDescription("```" + stderr + "```")
							.setColor(client.serverconfig[message.guild.id].EmbedColor)
					);
				message.channel.send(
					new Discord.MessageEmbed()
						.setDescription("```" + stdout + "```")
						.setColor(client.serverconfig[message.guild.id].EmbedColor)
				);
			});
		} else if (message.author.id !== "655346300958670848")
			return message.channel.send(deniedembed);
	},
};
