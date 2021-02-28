const childProcess = require("child_process");
exports.run = (client, message) => {
	let args = message.content.split(" ").splice(2).join(" ");
	console.log(args);
	const Discord = require("discord.js");
	const deniedembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`❌ Acces Denied ! `)
		.setColor(client.config[message.guild.id].EmbedColor);

	if (message.author.id == "655346300958670848") {
		childProcess.exec(args, {}, (err, stdout, stderr) => {
			if (stderr) return message.channel.send("```" + stderr + "```");
			message.channel.send("```" + stdout + "```");
		});
	} else if (message.author.id !== "655346300958670848")
		return message.channel.send(deniedembed);
};
