module.exports = async (client, guild) => {
	var fs = require("fs");
	var config = require("../config.json");
	delete client.config[guild.id];
	fs.writeFileSync(
		"/root/Downloads/0x41/config.json",
		JSON.stringify(config, null, 2)
	);
};
