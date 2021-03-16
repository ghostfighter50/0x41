module.exports = {
	name: "help",
	description: "sends the help message",
	aliases: ["?", "cmd", "commands"],
	usage: "help (command)",
	type: "gen",
	admin: false,
	async run(client, message, args) {
		const Discord = require("discord.js");

		const infoembed = new Discord.MessageEmbed()
			.setTitle(`📚 Informations `)
			.setFooter("Made by Ghostfighter50 |  help <command>")
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setDescription(
				"\n\n`() = optional` \n `<> = required`\n`< | > = possible values` \n  `@user/role = mention`\n`#channel = channel mention`  \n`prefix =  `\n`{user}` = username for join/leave messages\n`{guild}` = guild name for join/leave messages\n\n"
			);

		const modembed = new Discord.MessageEmbed()
			.setFooter("Made by Ghostfighter50 |  help <command>")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const utilembed = new Discord.MessageEmbed()
			.setFooter("Made by Ghostfighter50 |  help <command>")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const pointembed = new Discord.MessageEmbed()
			.setFooter("Made by Ghostfighter50 |  help <command>")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const ticketembed = new Discord.MessageEmbed()
			.setFooter("Made by Ghostfighter50 |  help <command>")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const configembed = new Discord.MessageEmbed()
			.setFooter("Made by Ghostfighter50 |  help <command>")
			.setColor(client.serverconfig[message.guild.id].EmbedColor);

		const reactembed = new Discord.MessageEmbed()
			.setTitle(`📖 Help `)
			.setFooter("Made by Ghostfighter50")
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setDescription(
				"\n** 📚 Informations **\n** 🔨 Moderation**\n** ⚙️ Utilities**\n** 📊 Points**\n** 📩 Tickets**\n** 🛠️ Config**"
			);
		modembed.fields.value = "";
		configembed.fields.value = "";
		pointembed.fields.value = "";
		utilembed.fields.value = "";
		ticketembed.fields.value = "";
		infoembed.fields.value = "";

		client.commands.forEach((cmd) => {
			if (cmd.type == "mod")
				modembed.fields = {
					value: `${modembed.fields.value}\n\`${cmd.usage}\``,
					name: `🔨 Moderation`,
				};
			else if (cmd.type == "config")
				configembed.fields = {
					value: `${configembed.fields.value}\n\`${cmd.usage}\` `,
					name: `🛠️ Config`,
				};
			else if (cmd.type == "points")
				pointembed.fields = {
					value: `${pointembed.fields.value}\n\`${cmd.usage}\` `,
					name: `📊 Points`,
				};
			else if (cmd.type == "util")
				utilembed.fields = {
					value: `${utilembed.fields.value}\n\`${cmd.usage}\` `,
					name: `⚙️ Utilities`,
				};
			else if (cmd.type == "ticket")
				ticketembed.fields = {
					value: `${ticketembed.fields.value}\n\`${cmd.usage}\` `,
					name: ` 📩 Tickets`,
				};
			else if (cmd.type == "gen")
				infoembed.fields = {
					value: `${infoembed.fields.value}\n\`${cmd.usage}\` `,
					name: `📚 commands `,
				};
			else if (cmd.type === "dev")
				modembed.fields = {
					value: `${modembed.fields.value}\n\`${cmd.usage}\` **DEV only**`,
					name: `🔨 Moderation`,
				};
			else console.log("error");
		});

		if (!args[0]) {
			message.channel.send(reactembed).then((msg) => {
				msg.react("📚");
				msg.react("🔨");
				msg.react("⚙️");
				msg.react("📊");
				msg.react("📩");
				msg.react("🛠️");
				msg.react("❌");

				const filter = (reaction, user) => {
					if (user.id == msg.author.id) return;
					reaction.users.remove(user);
					let emoji = reaction.emoji.name;
					if (emoji == "📚") {
						msg.edit(infoembed);
					} else if (emoji == "🔨") {
						msg.edit(modembed);
					} else if (emoji == "⚙️") {
						msg.edit(utilembed);
					} else if (emoji == "📊") {
						msg.edit(pointembed);
					} else if (emoji == "📩") {
						msg.edit(ticketembed);
					} else if (emoji == "🛠️") {
						msg.edit(configembed);
					} else if (emoji == "❌") {
						msg.delete();
						message.delete();
					}
				};
				msg.awaitReactions(filter, { time: 60000 }).then((collected) => {});
			});
		} else if (args[0]) {
			let cmd = client.commands.find((cmd) => cmd.name == args[0]);
			if (!cmd) return message.reply(":x: Command not found ! try : ` help`");
			let embed = new Discord.MessageEmbed()
				.setTitle("📖 " + cmd.name)
				.addField("Aliases", "`" + cmd.aliases + "`")
				.addField("Description", "`" + cmd.description + "`")
				.addField("Usage", "`" + cmd.usage + "`")
				.addField("Admin", "`" + cmd.admin + "`")
				.setFooter("Made by Ghostfighter50")
				.setColor(client.serverconfig[message.guild.id].EmbedColor);
			message.channel.send(embed);
		}
	},
};
