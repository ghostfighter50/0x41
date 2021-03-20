module.exports = async (client, guild) => {
	const fs = require("fs");
	const config = require("../../../serverconfig.json");
	console.log("[-] Guild  Deleted : " + guild.name + "\nOwner : " + guild.owner.user.tag + "Members : " + guild.memberCount)
	delete client.serverconfig[guild.id];
	fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2));
};
