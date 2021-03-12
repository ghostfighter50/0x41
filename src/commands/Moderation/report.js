const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	let channel = message.guild.channels.cache.find(
		(c) => c.id == client.serverconfig[message.guild.id].ReportChannel
	);
	let TargetUser = message.mentions.members.first();
	let reason = args.slice(1).join(" ");
	if (!TargetUser) return message.reply("❌ specify a user !");
	if (!reason) return message.reply("❌ enter a reason !");
	let embed = new Discord.MessageEmbed()
		.setTitle("❗ New Report by " + message.author.tag)
		.setDescription(
			`Reported user : ${TargetUser.toString()}\nReason : ${reason}`
		)
		.setColor(client.serverconfig[message.guild.id].EmbedColor)
		.setTimestamp();
	channel.send(embed);
	message.channel.send(
		new Discord.MessageEmbed()
			.setDescription(
				`✅ ${TargetUser.toString()} was reported by ${message.author.toString()} `
			)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
	);
	module.exports = {
		name: 'report',
		description: 'reports the specified user for the specified reason',
		aliases: ['rp'],
		usage: client.config.prefix+'report <@user> <reason>',
		type: "mod",
		admin:false
	};
};