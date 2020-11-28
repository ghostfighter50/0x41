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

	const banMember = message.mentions.members.first();
    let args = message.content.slice(4).split(' ')
    var reason = args[3]
	const embed = new Discord.MessageEmbed()
		.setTitle("✅ Kicked from server")
		.setDescription(banMember.guild)
		.setThumbnail(banMember.guild.iconURL)
        .setColor(0x00AE86)
        .setURL("https://discord.gg/pU2JHgG5Mj")
		.setFooter(`Kicked by ${message.author.username}`);

	message.channel.send('❓ Are you sure you want to kick this user?\nreply with "yes" or "no" in the next 10 seconds');

	await message.channel.awaitMessages(msg => msg.content.toLowerCase() == "yes" || msg.content.toLowerCase() == "no",
		{
			maxMatches: 1,
			max: 1,
			time: 10000,
			errors: ['time']
		})
		.then(msg1 => {
			if (msg1.first().author != message.author) { message.channel.send("only user whom requested the kick can accept or decline") } else {
				if (msg1.first().content.toLowerCase() == "yes") {
					setTimeout(() => banMember.ban().then(member => {
						message.reply(`✅ ${member.user.username} was succesfully kicked.`);
					}), 2000);
					if (banMember.kickable) {
						if (reason != "") {
							embed.addField("Reason for kick", `${reason.join(" ")}`);
							banMember.send(embed);
						}
						else {
							embed.addField("Reason for kick", "No reason was specified");
							banMember.send(embed);
						}
					} else {
						message.channel.send(`❌ Failed to kick member ${banMember}`);
					}
				} else if (msg1.first().content.toLowerCase() == "no") {
					message.channel.send("❌ Kicking aborted");
				}
			}
		})
        .catch(() => message.channel.send("⌛ No answer was provided within the 10 second window. aborting kick..."));
    }