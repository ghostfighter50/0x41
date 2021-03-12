const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("BAN_MEMBERS"))
		return message.reply("❌ you can't use this command.");
	if (message.mentions.members.size === 0)
		return message.reply("❌ please mention a user to ban...");
	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
		return message.reply("❌ I need permissions to ban!");
	if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
		return message.reply("❌ can't ban an Admin :p");

	const banMember = message.mentions.members.first();
	var reason = args[1];
	const embed = new Discord.MessageEmbed()
		.setTitle("✅ Banned from server")
		.setDescription(banMember.guild)
		.setThumbnail(banMember.guild.iconURL)
		.setColor(client.serverconfig.EmbedColor)
		.setFooter(`Banned by ${message.author.username}`);

	if (banMember.bannable) {
		if (reason) {
			embed.addField("Reason for ban", `${reason.join(" ")}`);
			message.channel.send(embed);
			banMember.send(embed);
			banMember.ban();
		} else {
			embed.addField("Reason for ban", "No reason was specified");
			message.channel.send(embed);
			banMember.send(embed);
			banMember.ban();
		}
	} else {
		message.channel.send(`❌ Failed to ban member ${banMember}`);
	}
	
};
module.exports = {
	name: 'ban',
	description: 'ban the specified user',
	aliases: ['b'],
	usage: 'sudo ban <@user> (reason)',
	type: "mod",
	admin:false
};