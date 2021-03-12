module.exports.run = (client, message, args) => {
	const Discord = require("discord.js");

	if (client.serverconfig[message.guild.id].Levels == false)
		return message.reply(
			"Set the Leveling system with sudo  set-level <1|2|3> <@role>"
		);

	
	const user =
		message.mentions.users.first() || client.users.cache.get(args[0]);
	if (!user) return message.reply("You must mention someone or give their ID!");

	const pointsToAdd = parseInt(args[1], 10);
	if (!pointsToAdd)
		return message.reply("You didn't tell me how many points to give...");

	let userPoints = client.points.get(
		`${message.guild.id}-${user.id}`,
		"points"
	);
	userPoints += pointsToAdd;

	client.points.set(`${message.guild.id}-${user.id}`, userPoints, "points");
	const giveembed = new Discord.MessageEmbed()
		.setThumbnail(message.author.avatarURL)
		.setTitle(`✅ Points added ! `)
		.setDescription(
			`${user.tag} has received **${pointsToAdd}** points and now has **${userPoints}** points.`
		)
		.setColor(client.serverconfig[message.guild.id].EmbedColor);

	message.channel.send(giveembed);

};
module.exports = {
	name: 'give',
	description: 'give a specified amount of points to the specified member',
	aliases: ['p'],
	usage: 'sudo give <@user> <amount>',
	type: "points",
	admin:true,};