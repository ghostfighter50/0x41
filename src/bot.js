const Enmap = require("enmap");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const server = require("./Dashboard/app");
const serverconfig = require("../serverconfig.json");
let i = 0;
server.load(client);
client.config = config;
client.serverconfig = serverconfig;
client.points = new Enmap({ name: "points" });
fs.readdir(__dirname + "/events/", (err, files) => {
	if (err) return console.error(err);

	files.forEach((file) => {
		const event = require(__dirname + `/events/${file}`);
		const eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	});
});
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync(__dirname + "/commands/");

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(__dirname + `/commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(__dirname + `/commands/${folder}/${file}`);
		i++;
		client.commands.set(command.name, command);
	}
}
console.log(`[+] ${i} commands`);
client.commandsNumber = i;
process.on("unhandledRejection", (e) => console.log(e));
process.on("warning", (warn) => console.log(warn.message));
client.login(config.token);
module.exports = client;
