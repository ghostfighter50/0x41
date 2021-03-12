module.exports = async (client, guild) => {
	var fs = require("fs");
	var config = require("../../serverconfig.json");
	delete client.serverconfig[guild.id];
	fs.writeFileSync(
		client.serverconfig.path
,
		JSON.stringify(config, null, 2)
	);
};
