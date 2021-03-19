const Discord = require("discord.js");

module.exports = {
	name: "create-role",
	description: "creates a role",
	aliases: ["c-r"],
	usage: "sudo create-role <name>",
	type: "mod",
	admin: false,
	run: async (client, message, args) => {
		if (!message.member.hasPermission("MANAGE_ROLES")) {
			return message.reply("❌ you can't use this command.");
		}

		const role = args[0];
		const embed = new Discord.MessageEmbed()
			.setTitle("✅ Created a role succesfully")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		try {
			message.guild.roles.create({
				data: {
					name: `${args[0]}`,
					color: "DEFAULT",
				},
			});

			message.channel.send(embed);
		} catch {
			message.channel.send(`❌ Failed to create role ${args[0]}`);
		}
	},
};
