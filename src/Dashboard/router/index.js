const express = require("express");
const router = express.Router();
const passport = require("passport");
const CheckAuth = require("../auth/CheckAuth");

router
	.get("/stats", function (req, res) {
		const milliseconds = parseInt(
			(req.client.server.client.uptime % 1000) / 100
		);
		let seconds = parseInt((req.client.server.client.uptime / 1000) % 60);
		let minutes = parseInt(
			(req.client.server.client.uptime / (1000 * 60)) % 60
		);
		let hours = parseInt(
			(req.client.server.client.uptime / (1000 * 60 * 60)) % 24
		);
		days = parseInt(
			(req.client.server.client.uptime / (1000 * 60 * 60 * 24)) % 60
		);
		days = days < 10 ? "0" + days : days;
		hours = hours < 10 ? "0" + hours : hours;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		res.render("stats.ejs", {
			status: req.isAuthenticated()
				? `${req.user.username}#${req.user.discriminator}`
				: "Login",
			client: req.client.server.client,
			uptime:
				days +
				"d " +
				hours +
				"h " +
				minutes +
				"m " +
				seconds +
				"." +
				milliseconds +
				"s",
			version: "12",
			process: process,
			login: req.isAuthenticated() ? "yes" : "no",
		});
	})
	.get("/commands", function (req, res) {
		res.render("help.ejs", {
			status: req.isAuthenticated()
				? `${req.user.username}#${req.user.discriminator}`
				: "Login",
			login: req.isAuthenticated() ? "yes" : "no",
			client: req.client.server.client,
		});
	})
	.get("/", function (req, res) {
		res.render("index.ejs", {
			status: req.isAuthenticated()
				? `${req.user.username}#${req.user.discriminator}`
				: "Login",
			client: req.client.server.client.user,
			user: req.user,
			login: req.isAuthenticated() ? "yes" : "no",
			invite: `https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=bot&permissions=8`,
		});
	})
	.get(
		"/login",
		passport.authenticate("discord", { failureRedirect: "/" }),
		function (req, res) {
			res.redirect("/profile");
		}
	)
	.get("/logout", async function (req, res) {
		await req.logout();
		await res.redirect("/");
	})
	.get("/snake", async function (req, res) {
		res.render("snake.ejs");
	});

module.exports = router;
