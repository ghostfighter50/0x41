/* eslint-disable no-tabs */
const express = require("express");
const router = express.Router();
const CheckAuth = require("../auth/CheckAuth");
const fs = require("fs");
router
	.get("/:guildID", CheckAuth, (req, res) => {
		const serv = req.client.server.client.guilds.cache.get(req.params.guildID);
		if (!serv) {
			return res.redirect(
				`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=bot&permissions=8&guild_id=${req.params.guildID}`
			);
		}
		if (
			!req.client.server.client.guilds.cache
				.get(req.params.guildID)
				.members.cache.get(req.user.id)
				.hasPermission("MANAGE_GUILD")
		) {
			return res.redirect("/profile");
		}
		res.render("guild.ejs", {
			status: req.isAuthenticated()
				? `${req.user.username}#${req.user.discriminator}`
				: "Login",
			client: req.client.server.client.user,
			user: req.user,
			avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
			iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
			guild: serv,
		});
	})
	.get("/:guildID/settings", CheckAuth, (req, res) => {
		const serv = req.client.server.client.guilds.cache.get(req.params.guildID);
		if (!serv) {
			return res.redirect(
				`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=bot&permissions=8&guild_id=${req.params.guildID}`
			);
		}
		if (
			!req.client.server.client.guilds.cache
				.get(req.params.guildID)
				.members.cache.get(req.user.id)
				.hasPermission("MANAGE_GUILD")
		) {
			return res.redirect("/profile");
		}
		if (req.query.msg && req.query.type) {
			res.render("settings.ejs", {
				status: req.isAuthenticated()
					? `${req.user.username}#${req.user.discriminator}`
					: "Login",
				client: req.client.server.client,
				user: req.user,
				avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
				iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
				guild: serv,
				message: { value: req.query.msg, type: req.query.type },
			});
		} else {
			res.render("settings.ejs", {
				status: req.isAuthenticated()
					? `${req.user.username}#${req.user.discriminator}`
					: "Login",
				client: req.client.server.client,
				user: req.user,
				avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
				iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
				guild: serv,
				message: null,
			});
		}
	})
	.get("/:guildID/levels", CheckAuth, (req, res) => {
		const serv = req.client.server.client.guilds.cache.get(req.params.guildID);
		if (!serv) {
			return res.redirect(
				`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=bot&permissions=8&guild_id=${req.params.guildID}`
			);
		}
		if (
			!req.client.server.client.guilds.cache
				.get(req.params.guildID)
				.members.cache.get(req.user.id)
				.hasPermission("MANAGE_GUILD")
		) {
			return res.redirect("/profile");
		}
		if (req.query.msg && req.query.type) {
			res.render("levels.ejs", {
				status: req.isAuthenticated()
					? `${req.user.username}#${req.user.discriminator}`
					: "Login",
				client: req.client.server.client,
				user: req.user,
				avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
				iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
				guild: serv,
				message: { value: req.query.msg, type: req.query.type },
			});
		} else {
			res.render("levels.ejs", {
				status: req.isAuthenticated()
					? `${req.user.username}#${req.user.discriminator}`
					: "Login",
				client: req.client.server.client,
				user: req.user,
				avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
				iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
				guild: serv,
				message: null,
			});
		}
	})

	.post("/:guildID/levels", CheckAuth, async function (req, res) {
		res.redirect(
			`/servers/${req.params.guildID}/levels?msg=Levels Updated !&type=success`
		);
		if (
			req.body.FlagValue !== "none" &&
			req.body.FlagPoints !== "" &&
			req.body.FlagName !== "none"
		) {
			req.client.server.client.serverconfig[req.params.guildID].Flags.push({
				name: req.body.FlagName,
				value: req.body.FlagValue,
				points: req.body.FlagPoints,
			});
		}
		if (
			req.body.Level !== "none" &&
			req.body.RolePoints !== "" &&
			req.body.LevelRole !== "none"
		) {
			if (req.body.Level == "1")
				req.client.server.client.serverconfig[
					req.params.guildID
				].LevelRoles.level1 = {
					id: req.body.LevelRole,
					points: req.body.RolePoints,
				};
			if (req.body.Level == "2")
				req.client.server.client.serverconfig[
					req.params.guildID
				].LevelRoles.level2 = {
					id: req.body.LevelRole,
					points: req.body.RolePoints,
				};
			if (req.body.Level == "3")
				req.client.server.client.serverconfig[
					req.params.guildID
				].LevelRoles.level3 = {
					id: req.body.LevelRole,
					points: req.body.RolePoints,
				};
		}
		fs.writeFileSync(
			req.client.server.client.config.path,
			JSON.stringify(req.client.server.client.serverconfig, null, 2)
		);
	})
	.post("/:guildID/levels/remove", CheckAuth, async function (req, res) {
		res.redirect(
			`/servers/${req.params.guildID}/levels?msg=Levels Updated !&type=success`
		);
		if (req.body.PointsUser !== "none" && req.body.PointsValue !== "") {
			let userPoints = req.client.server.client.points.get(
				`${req.params.guildID}-${req.body.PointsUser}`,
				"points"
			);
			userPoints -= req.body.PointsValue;

			req.client.server.client.points.set(
				`${req.params.guildID}-${req.user.id}`,
				userPoints.slice(1),
				"points"
			);
		}
	})
	.post("/:guildID/levels/add", CheckAuth, async function (req, res) {
		res.redirect(
			`/servers/${req.params.guildID}/levels?msg=Levels Updated !&type=success`
		);
		if (req.body.PointsUser !== "none" && req.body.PointsValue !== "") {
			let userPoints = req.client.server.client.points.get(
				`${req.params.guildID}-${req.user.id}`,
				"points"
			);
			userPoints += req.body.PointsValue;

			req.client.server.client.points.set(
				`${req.params.guildID}-${req.body.PointsUser}`,
				userPoints.slice(1),
				"points"
			);
		}
	})
	.post("/:guildID", CheckAuth, async function (req, res) {
		if (!req.body.send_CHANNELID && req.body.send_CHANNELID === "NOT_SET") {
			return res.send("Error, no message specified.");
		}
		if (!req.body.send_MESSAGE && req.body.send_MESSAGE.length === 0) {
			return res.send("Error, no message specified.");
		}
		await req.client.server.client.guilds.cache
			.get(req.params.guildID)
			.channels.cache.get(req.body.send_CHANNELID)
			.send(req.body.send_MESSAGE);
		await res.redirect(`/servers/${req.params.guildID}`);
	})
	.post("/:guildID/settings", CheckAuth, async function (req, res) {
		res.redirect(
			`/servers/${req.params.guildID}/settings?msg=Settings Updated !&type=success`
		);
		if (
			req.body.Autoroles !== "none" &&
			req.body.Autorole !== null &&
			req.body.Autorole !== "null"
		)
			req.client.server.client.serverconfig[req.params.guildID].autoroles.push(
				req.body.Autoroles
			);
		req.client.server.client.serverconfig[req.params.guildID].JoinMessage = req
			.body.JoinMessage
			? req.body.JoinMessage
			: req.client.server.client.serverconfig[req.params.guildID].JoinMessage;
		req.client.server.client.serverconfig[req.params.guildID].LeaveMessage = req
			.body.LeaveMessage
			? req.body.LeaveMessage
			: req.client.server.client.serverconfig[req.params.guildID].LeaveMessage;
		req.client.server.client.serverconfig[req.params.guildID].RaidMode = req
			.body.RaidMode
			? req.body.RaidMode
			: req.client.server.client.serverconfig[req.params.guildID].RaidMode;
		req.client.server.client.serverconfig[req.params.guildID].Levels = req.body
			.Levels
			? req.body.Levels
			: req.client.server.client.serverconfig[req.params.guildID].Levels;
		req.client.server.client.serverconfig[req.params.guildID].JoinLogger = req
			.body.JoinLogger
			? req.body.JoinLogger
			: req.client.server.client.serverconfig[req.params.guildID].JoinLogger;
		req.client.server.client.serverconfig[
			req.params.guildID
		].SkidVerification = req.body.SkidVerification
			? req.body.SkidVerification
			: req.client.server.client.serverconfig[req.params.guildID]
					.SkidVerification;
		req.client.server.client.serverconfig[
			req.params.guildID
		].WelcomeChannel = req.body.WelcomeChannel
			? req.body.WelcomeChannel
			: req.client.server.client.serverconfig[req.params.guildID]
					.WelcomeChannel;
		req.client.server.client.serverconfig[
			req.params.guildID
		].ReportChannel = req.body.ReportChannel
			? req.body.ReportChannel
			: req.client.server.client.serverconfig[req.params.guildID].ReportChannel;
		req.client.server.client.serverconfig[req.params.guildID].TestChannel = req
			.body.TestChannel
			? req.body.TestChannel
			: req.client.server.client.serverconfig[req.params.guildID].TestChannel;
		req.client.server.client.serverconfig[req.params.guildID].VerifiedRole = req
			.body.VerifiedRole
			? req.body.VerifiedRole
			: req.client.server.client.serverconfig[req.params.guildID].VerifiedRole;
		req.client.server.client.serverconfig[
			req.params.guildID
		].UnverifiedRole = req.body.UnverifiedRole
			? req.body.UnverifiedRole
			: req.client.server.client.serverconfig[req.params.guildID]
					.UnverifiedRole;
		req.client.server.client.serverconfig[req.params.guildID].EmbedColor = req
			.body.EmbedColor
			? req.body.EmbedColor
			: req.client.server.client.serverconfig[req.params.guildID].EmbedColor;
		fs.writeFileSync(
			req.client.server.client.config.path,
			JSON.stringify(req.client.server.client.serverconfig, null, 2)
		);
	})
	.post("/:guildID/settings/reset", CheckAuth, async function (req, res) {
		req.client.server.client.serverconfig[req.params.guildID] = {};
		req.client.server.client.serverconfig[req.params.guildID].JoinMessage =
			"Welcome {user} to {guild}";
		req.client.server.client.serverconfig[req.params.guildID].LeaveMessage =
			":x: {user} left...";
		req.client.server.client.serverconfig[req.params.guildID].RaidMode = false;
		req.client.server.client.serverconfig[req.params.guildID].Levels = false;
		req.client.server.client.serverconfig[req.params.guildID].JoinLogger = true;
		req.client.server.client.serverconfig[
			req.params.guildID
		].SkidVerification = false;
		req.client.server.client.serverconfig[req.params.guildID].WelcomeChannel =
			"none";
		req.client.server.client.serverconfig[req.params.guildID].ReportChannel =
			"none";
		req.client.server.client.serverconfig[req.params.guildID].TestChannel =
			"none";
		req.client.server.client.serverconfig[req.params.guildID].autoroles = [];
		req.client.server.client.serverconfig[req.params.guildID].VerifiedRole =
			"none";
		req.client.server.client.serverconfig[req.params.guildID].UnverifiedRole =
			"none";
		req.client.server.client.serverconfig[req.params.guildID].EmbedColor =
			"0x00AE86";
		req.client.server.client.serverconfig[req.params.guildID].LevelRoles = {};
		req.client.server.client.serverconfig[
			req.params.guildID
		].LevelRoles.level1 = "";
		req.client.server.client.serverconfig[
			req.params.guildID
		].LevelRoles.level2 = "";
		req.client.server.client.serverconfig[
			req.params.guildID
		].LevelRoles.level3 = "";
		req.client.server.client.serverconfig[req.params.guildID].Flags = [];
		fs.writeFileSync(
			req.client.server.client.config.path,
			JSON.stringify(req.client.server.client.serverconfig, null, 2)
		);
		await res.redirect(
			`/servers/${req.params.guildID}/settings?msg=Settings Reseted !&type=danger`
		);
	})
	.post("/:guildID/settings/clear/flags", CheckAuth, async function (req, res) {
		req.client.server.client.serverconfig[req.params.guildID].Flags = [];
		fs.writeFileSync(
			req.client.server.client.config.path,
			JSON.stringify(req.client.server.client.serverconfig, null, 2)
		);
		await res.redirect(
			`/servers/${req.params.guildID}/settings?msg=Autoroles Cleared !&type=danger`
		);
	})
	.post(
		"/:guildID/settings/clear/autoroles",
		CheckAuth,
		async function (req, res) {
			req.client.server.client.serverconfig[req.params.guildID].autoroles = [];
			fs.writeFileSync(
				req.client.server.client.config.path,
				JSON.stringify(req.client.server.client.serverconfig, null, 2)
			);
			await res.redirect(
				`/servers/${req.params.guildID}/settings?msg=Flags Cleared !&type=danger`
			);
		}
	);
module.exports = router;
