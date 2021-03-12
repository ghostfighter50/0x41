const Discord = require("discord.js");

module.exports = {
	name: "kick",
	description: "kick the specified user",
	aliases: ["k"],
	usage: "sudo kick <@user> (reason)",
	type: "mod",
	admin: false,
	run: async (client, message, args) => {
		if (!message.member.hasPermission("KICK_MEMBERS"))
			return message.reply("❌ you can't use this command.");
		if (message.mentions.members.size === 0)
			return message.reply("❌ please mention a user to kick...");
		if (!message.guild.me.hasPermission("kick_MEMBERS"))
			return message.reply("❌ I need permissions to kick!");
		if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
			return message.reply("❌ can't kick an Admin :p");

		const kcikMember = message.mentions.members.first();
		var reason = args[1];
		const embed = new Discord.MessageEmbed()
			.setTitle("✅ Kicked from server")
			.setDescription(kcikMember.guild)
			.setThumbnail(kcikMember.guild.iconURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setFooter(`Kicked by ${message.author.username}`);

		if (kcikMember.kickable) {
			if (reason) {
				embed.addField("Reason for kick", `${reason.join(" ")}`);
				message.channel.send(embed);
				kcikMember.send(embed);
				kcikMember.kick();
			} else {
				embed.addField("Reason for kick", "No reason was specified");
				message.channel.send(embed);
				kcikMember.send(embed);
				kcikMember.kick();
			}
		} else {
			message.channel.send(`❌ Failed to kick member ${kcikMember}`);
		}
	},
};
