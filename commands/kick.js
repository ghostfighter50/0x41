const Discord = require("discord.js");

exports.run = async (client, message) => {
	if (!message.member.hasPermission("KICK_MEMBERS"))
		return message.reply("❌ you can't use this command.");
	if (message.mentions.members.size === 0)
		return message.reply("❌ please mention a user to kick...");
	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
		return message.reply("❌ I need permissions to kick!");
	if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
		return message.reply("❌ can't kick an Admin :p");

	const kcikMember = message.mentions.members.first();
	let args = message.content.slice(4).split(" ");
	var reason = args[3];
	const embed = new Discord.MessageEmbed()
		.setTitle("✅ Kicked from server")
		.setDescription(kcikMember.guild)
		.setThumbnail(kcikMember.guild.iconURL)
		.setColor(client.config[message.guild.id].EmbedColor)
		.setFooter(`Kicked by ${message.author.username}`);

	if (kcikMember.kickable) {
		if (reason != "") {
			embed.addField("Reason for kick", `${reason.join(" ")}`);
			kcikMember.send(embed);
		} else {
			embed.addField("Reason for kick", "No reason was specified");
			kcikMember.send(embed);
		}
	} else {
		message.channel.send(`❌ Failed to kick member ${kcikMember}`);
	}
};
