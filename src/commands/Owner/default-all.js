module.exports = {
	name: "defaul-all",
	description: "set the server configuration to default for every server",
	aliases: ["d-f", "rip-db"],
	usage: "sudo default-all",
	type: "dev",
	admin: false,
	async run(client, message, args) {
		const Discord = require("discord.js");
		if (!message.member.id == client.config.id) {
			return message.channel.send("**Dev only command :no_entry:.**");
		}
		const config = require("../../../serverconfig.json");
		client.guilds.cache.forEach((guild) => {
			config[guild.id] = {};
			config[guild.id].JoinMessage = "Welcome {user} to {guild}";
			config[guild.id].LeaveMessage = ":x: {user} left...";
			config[guild.id].RaidMode = false;
			config[guild.id].Levels = false;
			config[guild.id].JoinLogger = true;
			config[guild.id].SkidVerification = false;
			config[guild.id].WelcomeChannel = "";
			config[guild.id].ReportChannel = "";
			config[guild.id].TestChannel = "";
			config[guild.id].autoroles = [];
			config[guild.id].VerifiedRole = "";
			config[guild.id].UnverifiedRole = "";
			config[guild.id].EmbedColor = "#00ae86";
			config[guild.id].LevelRoles = {};
			config[guild.id].LevelRoles.level1 = "";
			config[guild.id].LevelRoles.level2 = "";
			config[guild.id].LevelRoles.level3 = "";
			config[guild.id].Flags = [];
		});

		fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));

		const embed = new Discord.MessageEmbed()
			.setTitle("Nuked !")
			.setDescription(
				`I've resetd the settings of  ${client.guilds.cache.size} servers.`
			)
			.setColor(client.serverconfig[message.guild.id].EmbedColor)
			.setThumbnail(message.author.avatarURL);

		message.channel.send(embed);
	},
};
