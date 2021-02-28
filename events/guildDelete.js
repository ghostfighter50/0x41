module.exports = async (client, guild) => {
	var fs = require("fs");
	var config = require("../config.json");
	delete client.config[guild.id];
	fs.writeFileSync(
		client.config.path
,
		JSON.stringify(config, null, 2)
	);
};
