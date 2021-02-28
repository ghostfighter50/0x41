const Discord = require("discord.js");

exports.run = async (client, message) => {

	if (!message.member.hasPermission("BAN_MEMBERS"))
		return message.reply("❌ you can't use this command.");
	if (message.mentions.members.size === 0)
		return message.reply("❌ please mention a user to ban...");
	if (!message.guild.me.hasPermission("BAN_MEMBERS"))
		return message.reply("❌ I need permissions to ban!");
	if (message.mentions.members.first().hasPermission("ADMINISTRATOR"))
		return message.reply("❌ can't ban an Admin :p");

	const banMember = message.mentions.members.first();
    let args = message.content.slice(4).split(' ')
    var reason = args[3]
	const embed = new Discord.MessageEmbed()
		.setTitle("✅ Banned from server")
		.setDescription(banMember.guild)
		.setThumbnail(banMember.guild.iconURL)
        .setColor(client.config.EmbedColor)
		.setFooter(`Banned by ${message.author.username}`);

					if (banMember.bannable) {
						if (reason != "") {
							embed.addField("Reason for ban", `${reason.join(" ")}`);
							banMember.send(embed);
						}
						else {
							embed.addField("Reason for ban", "No reason was specified");
							banMember.send(embed);
						}
					} else {
						message.channel.send(`❌ Failed to ban member ${banMember}`);
					}
				
}
