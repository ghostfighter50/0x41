/* eslint-disable no-tabs */
const express = require("express");
const router = express.Router();
const serverconfig = require("../../../serverconfig.json");
const client = require("../../bot.js");
router
	.get("/:guildID/config", async function (req, res) {
		try {
			if (serverconfig[req.params.guildID] == undefined) {
				return res.json("Invalid Guild ID.");
			}
			res.header("Content-Type", "application/json");
			res.send(JSON.stringify(serverconfig[req.params.guildID], null, 2));
		} catch {
			res.json("Invalid Guild ID.");
		}
	})
	.post("/:guildID/config", async function (req, res) {
		try {
			if (serverconfig[req.params.guildID] == undefined) {
				return res.json("Invalid Guild ID.");
			}
			res.header("Content-Type", "application/json");
			res.send(JSON.stringify(serverconfig[req.params.guildID], null, 2));
		} catch {
			res.json("Invalid Guild ID.");
		}
	})
	.get("/:guildID/:MemberID/points", async function (req, res) {
		try {
			let userPoints = req.client.server.client.points.get(
				`${req.params.guildID}-${req.params.MemberID}`,
				"points"
			);
			res.header("Content-Type", "application/json");
			res.send(userPoints);
		} catch {
			res.json("Invalid Guild/Member ID.");
		}
	})
	.post("/:guildID/:MemberID/points", async function (req, res) {
		try {
			let userPoints = req.client.server.client.points.get(
				`${req.params.guildID}-${req.params.MemberID}`,
				"points"
			);
			res.header("Content-Type", "application/json");
			res.send(userPoints);
		} catch {
			res.json("Invalid Guild/Member ID.");
		}
	});

module.exports = router;
