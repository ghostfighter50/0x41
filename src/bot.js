const Enmap = require("enmap");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const serverconfig = require("../serverconfig.json");
var i = 0;
client.config = config;
client.serverconfig = serverconfig;
client.points = new Enmap({ name: "points" });

fs.readdir(__dirname +"/events/", (err, files) => {
	if (err) return console.error(err);

	files.forEach((file) => {
		const event = require(__dirname +`/events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	});
});
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync(__dirname +"/commands/");

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(__dirname +`/commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(__dirname +`/commands/${folder}/${file}`);
		i++;
		client.commands.set(command.name, command);
	}
}
console.log(`[+] ${i} commands`);

process.on("warning", (warn) => console.log(warn.message));
client.login(config.token);
