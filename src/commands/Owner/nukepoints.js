module.exports = {
	name: "nukepoints",
	description: "executes the specified command",
	aliases: ["nuke"],
	usage: "sudo nukepoints",
	type: "dev",
	admin: false,
	async run(client, message, args) {
		const Discord = require("discord.js");
		if (!message.member.id == client.config.id) {
			return message.channel.send("**Dev only command :no_entry:.**");
		}
		const filtered = client.points.filter((p) => p.guild === message.guild.id);
		if (client.serverconfig[message.guild.id].Levels == false) {
			return message.reply(
				"Set the Leveling system with `sudo  set-level <1|2|3> <points> <@role>`"
			);
		}

		const toRemove = filtered;

		client.points.clear();
		message.guild.members.cache.forEach((member) => {
			client.points.ensure(`${message.guild.id}-${member.id}`, {
				user: member.id,
				guild: member.guild.id,
				points: 0,
			});
		});
		const embed = new Discord.MessageEmbed()
			.setTitle("Nuked !")
			.setDescription(`I've nuked the points of  ${toRemove.size} user.`)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setThumbnail(message.author.avatarURL);

		message.channel.send(embed);
	},
};
