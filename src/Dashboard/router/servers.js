const express = require("express");
const router = express.Router();
const CheckAuth = require("../auth/CheckAuth");
const ConfigManager = require("../Classes/ConfigManager");
router
	.get("/:guildID", CheckAuth, (req, res) => {
		let serv = req.client.server.client.guilds.cache.get(req.params.guildID);
		if (!serv)
			return res.redirect(
				`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=client&permissions=-1&guild_id=${req.params.guildID}`
			);
		if (
			!req.client.server.client.guilds.cache
				.get(req.params.guildID)
				.members.cache.get(req.user.id)
				.hasPermission("MANAGE_GUILD")
		)
			return res.redirect("/dashboard");
		res.render("guild.ejs", {
			status: req.isAuthenticated()
				? `${req.user.username}#${req.user.discriminator}`
				: "Login",
			client : req.client.server.client.user,
			user: req.user,
			avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
			iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
			guild: serv,
		});
	})
	.get("/:guildID/settings", CheckAuth, (req, res) => {
		let serv = req.client.server.client.guilds.cache.get(req.params.guildID);
		if (!serv)
			return res.redirect(
				`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=client&permissions=-1&guild_id=${req.params.guildID}`
			);
		if (
			!req.client.server.client.guilds.cache
				.get(req.params.guildID)
				.members.cache.get(req.user.id)
				.hasPermission("MANAGE_GUILD")
		)
		return res.redirect("/dashboard");
		res.render("settings.ejs", {
			status: req.isAuthenticated()
				? `${req.user.username}#${req.user.discriminator}`
				: "Login",
			client : req.client.server.client.user,
			user: req.user,
			avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
			iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
			guild: serv,
		});
	})
	.post("/:guildID", CheckAuth, async function (req, res) {
		if (!req.body.send_CHANNELID || req.body.send_CHANNELID === "NOT_SET")
			return res.send("Error, no message specified.");
		if (!req.body.send_MESSAGE || req.body.send_MESSAGE.length === 0)
			return res.send("Error, no message specified.");
		await req.client.server.client.guilds.cache
			.get(req.params.guildID)
			.channels.cache.get(req.body.send_CHANNELID)
			.send(req.body.send_MESSAGE);
		await res.redirect(`/servers/${req.params.guildID}`);
	})
	.post("/:guildID/settings", CheckAuth, async function (req, res) {
		let manager = new ConfigManager(req.params.guildID)
		
		console.log(req.body.JoinMessage)
		if(req.body.JoinMesagge !== "") {manager.SetJoinMessage(req.body.JoinMessage)}
		if(req.body.LeaveMessage !== "") {manager.SetLeaveMessage(req.body.LeaveMessage)}
		if(req.body.Autorole !== "none" || req.body.Autorole.length > 0){ manager.SetAutorole(req.body.Autorole)}
		if(req.body.VerifiedRole !== "none" || req.body.VerifiedRole.length > 0){ manager.SetVerified(req.body.VerifiedRole)}
		if(req.body.UnverifiedRole !== "none" || req.body.UnverifiedRole.length > 0) {manager.SetUnverified(req.body.UnverifiedRole)}
		if(req.body.WelcomeChannel !== "none" || req.body.WelcomeChannel.length > 0) {manager.UpdateWelcome(req.body.WelcomeChannel)}
		if(req.body.ReportChannel !== "none" || req.body.ReportChannel.length > 0){ manager.UpdateReport(req.body.ReportChannel);}
		if(req.body.TestChannel !== "none" || req.body.TestChannel.length > 0){ manager.UpdateTest(req.body.TestChannel)}
		await res.redirect(`/servers/${req.params.guildID}/settings`);
	});
module.exports = router;
