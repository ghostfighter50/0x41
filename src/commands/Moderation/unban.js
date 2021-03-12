const Discord = require("discord.js");

exports.run = async (client, message, args) => {

	if (!message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send("**Insufficient permissions :no_entry:.**");

	let member = await client.users.fetch(args[0]);
	if (!member)
		return message.channel.send("**No targeted user :warning:.**");

	let reason = args[1];
	if (!reason) reason = "No Reason given!";

	if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]))
		return message.channel.send("**Insufficient permissions :no_entry:.**");
	try {
		const embed = new Discord.MessageEmbed()
			.setTitle("✅ Unbanned from server")
			.setDescription(message.guild.name)
			.setThumbnail(message.guild.iconURL)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		message.guild.members.unban(member, { reason: reason });
		message.channel.send(embed);
	} catch (e) {
		console.log(e.message);
	}
	module.exports = {
		name: 'unban',
		description: 'unbans the specified id from the server',
		aliases: ['ub'],
		usage: client.config.prefix+'unban <id> (reason)',
		type: "mod",
		admin:true
	};
};
