module.exports = async (client, guild) => {
	client.guilds.cache.get("808327471816245248").channels.cache.get("808328043176132649").send(new Discord.MessageEmbed()+ client.config.path).setDescription("```"+"New Guild : "+ guild.name+"\nMembers : "+guild.memberCount+"Owner : "+guild.owner.user.username+"```").setColor("#00ae86");
	const fs = require("fs");
	const config = require("../../../serverconfig.json");
	delete client.serverconfig[guild.id];
	fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));
};
