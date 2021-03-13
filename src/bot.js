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

fs.readdir("../src/events/", (err, files) => {
	if (err) return console.error(err);

	files.forEach((file) => {
		const event = require(`../src/events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	});
});
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync("../src/commands/");

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`../src/commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
	for (const file of commandFiles) {
		const command = require(`../src/commands/${folder}/${file}`);
		i++;
		client.commands.set(command.name, command);
	}
}
console.log(`[+] ${i} commands`);
process.on("warning", (warn) => console.log(warn.message));
client.login(config.token);
