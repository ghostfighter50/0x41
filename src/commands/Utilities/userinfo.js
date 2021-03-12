const moment = require("moment");
const Discord = require("discord.js");
function checkDays(date) {
	let now = new Date();
	let diff = now.getTime() - date.getTime();
	let days = Math.floor(diff / 86400000);
	return days + (days == 1 ? " day" : " days") + " ago";
}
exports.run = async (client, message, args) => {
	try {
		let user = message.mentions.users.first();
		let muser = message.guild.member(message.mentions.users.first());
		//if(muser == undefined) muser = message.author

		let status = "";
		if (status === null) status = "No Game";
		if (muser.presence.activities[0].type == "CUSTOM_STATUS") {
			let cstatus = muser.presence.activities[0].state;
			if (muser.presence.activities[0].emoji) {
				if (muser.presence.activities[0].emoji.animated == true) {
					cstatus = `<a:${muser.presence.activities[0].emoji.name}:${muser.presence.activities[0].emoji.id}> ${cstatus}`;
				}
				if (muser.presence.activities[0].emoji.animated !== true) {
					cstatus = `<:${muser.presence.activities[0].emoji.name}:${muser.presence.activities[0].emoji.id}>${cstatus}`;
				}
			}
			status = `Custom Status:\n${cstatus}\nApp:\n${muser.presence.activities[1].name}`;
		} else {
			status = `${muser.presence.activities[0].type.toLowerCase()}: ${
				muser.presence.activities[0].name
			}`;
		}

		const embed = new Discord.MessageEmbed();
		embed
			.addField("Username", `${user.username}#${user.discriminator}`, true)
			.addField("ID", `${user.id}`, true)
			.setThumbnail(`${user.avatarURL()}`)
			.setURL(`${user.avatarURL()}`)
			.addField("Currently", `${muser.presence.status.toUpperCase()}`, true)
			.addField("Game", status, true)
			.addField(
				"Joined Discord",
				`${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(
					user.createdAt
				).fromNow()})`,
				true
			)
			.addField(
				"Joined Server",
				`${moment(muser.joinedAt).toString().substr(0, 15)}\n(${moment(
					muser.joinedAt
				).fromNow()})`,
				true
			)
			.addField("Roles", `${muser.roles.cache.array()}`, true)
			.addField("Is Bot", `${user.bot.toString().toUpperCase()}`, true)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		message.channel.send(embed);
	} catch {
		let user = message.mentions.users.first();
		let muser = message.guild.member(user);
		//if(muser == undefined) muser = message.author
		const error = new Discord.MessageEmbed();
		error
			.addField("Username", `${user.username}#${user.discriminator}`, true)
			.addField("ID", `${user.id}`, true)
			.setThumbnail(`${user.avatarURL()}`)
			.setURL(`${user.avatarURL()}`)
			.addField("Currently", `${muser.presence.status.toUpperCase()}`, true)
			.addField("Game", "NO GAME", true)
			.addField(
				"Joined Discord",
				`${moment(user.createdAt).toString().substr(0, 15)}\n(${moment(
					user.createdAt
				).fromNow()})`,
				true
			)
			.addField(
				"Joined Server",
				`${moment(muser.joinedAt).toString().substr(0, 15)}\n(${moment(
					muser.joinedAt
				).fromNow()})`,
				true
			)
			.addField("Roles", `${muser.roles.cache.array()}`, true)
			.addField("Is Bot", `${user.bot.toString().toUpperCase()}`, true)
			.setColor(client.serverconfig[message.guild.id].EmbedColor);
		message.channel.send(error);
	}
	module.exports = {
		name: 'userinfo',
		description: 'retrieves the specified user\'s informations',
		aliases: ['usr'],
		usage: client.config.prefix+'userinfo <@user>',
		type: "util",
		admin:false
	};
};