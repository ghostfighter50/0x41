const Discord = require('discord.js');

exports.run = async (client, message) => {
    let args = message.content.slice(4).split(' ')

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("**Insufficient permissions :no_entry:.**")

    let bannedMember = await client.users.fetch(args[2])
    if(!bannedMember) return message.channel.send("**No targeted user :warning:.**")

    let reason = args[3]
    if(!reason) reason = "No Reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("**Insufficient permissions :no_entry:.**")
    try {
        const embed = new Discord.MessageEmbed()
		.setTitle("✅ Unbanned from server")
		.setDescription(message.guild.name)
		.setThumbnail(message.guild.iconURL)
        .setColor(0x00AE86)
        .setURL("https://discord.gg/pU2JHgG5Mj")
		.setFooter(`Ubanned by ${message.author.username}`);
        message.guild.members.unban(bannedMember, {reason: reason})
        message.channel.send(embed)
    } catch(e) {
        console.log(e.message)
    }
}