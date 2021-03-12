const Enmap = require("enmap");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const serverconfig = require("./serverconfig.json");
client.config = config
client.serverconfig = serverconfig;
client.points = new Enmap({ name: "points" });

fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);

	files.forEach((file) => {
		const event = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Enmap();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		console.log(file.split(".")[0])
        client.commands.set(file.split(".")[0], command);
    }
}
process.on("warning", warn => console.log(warn.message))
client.login(config.token);
