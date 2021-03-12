var shortUrl = require("node-url-shortener");
let Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.delete();
	let embed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	shortUrl.short(args[0], (err, url) => {
		if (err) return console.log(err);
		embed.setTitle("✅ New URL : " + url).setURL(url);
		message.channel.send(embed);
	});
	
};
module.exports = {
	name: 'url',
	description: 'shorten the specified url',
	aliases: ['shorten'],
	usage: 'sudo url <url>',
	type: "util",
	admin:false
};