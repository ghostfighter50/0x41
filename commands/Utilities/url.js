var shortUrl = require("node-url-shortener");
let Discord = require("discord.js");

exports.run = (client, message, args) => {
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
