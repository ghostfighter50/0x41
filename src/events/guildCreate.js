module.exports = async (client, guild) => {
	const fs = require("fs");
	const config = require("../../../serverconfig.json");
	guild.members.cache.forEach((member) => {
		client.points.ensure(`${guild.id}-${member.id}`, {
			user: member.id,
			guild: member.guild.id,
			points: 0,
		});
	});
	client.guilds.cache.get("808327471816245248").channels.cache.get("808328043176132649").send(new Discord.MessageEmbed()+ client.config.path).setDescription("```"+"New Guild : "+ guild.name+"\nMembers : "+guild.memberCount+"Owner : "+guild.owner.user.username+"```").setColor("#00ae86");

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
	config[guild.id].EmbedColor = "0x00AE86";
	config[guild.id].LevelRoles = {};
	config[guild.id].LevelRoles.level1 = "";
	config[guild.id].LevelRoles.level2 = "";
	config[guild.id].LevelRoles.level3 = "";
	config[guild.id].Flags = [{}];
	fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));
};
