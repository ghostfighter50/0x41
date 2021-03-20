/* eslint-disable no-tabs */
const express = require("express");
const router = express.Router();
const serverconfig = require("../../../serverconfig.json");
const client = require("../../bot.js");
router
    .get("/:guildID/config",
		async function (req, res) {
            try {
            if(serverconfig[req.params.guildID] == undefined) {
               return res.json("Invalid Guild ID.")
            }
            res.header("Content-Type",'application/json');
			res.send(JSON.stringify(serverconfig[req.params.guildID], null, 2))
            } catch {
            res.json("Invalid Guild ID.")
            }
			
		}
    )
	.post("/:guildID/config",
		async function (req, res) {
            try {
            if(serverconfig[req.params.guildID] == undefined) {
                return res.json("Invalid Guild ID.")
            }
            res.header("Content-Type",'application/json');
            res.send(JSON.stringify(serverconfig[req.params.guildID], null, 2))
            } catch {
            res.json("Invalid Guild ID.")
            }
			
		}
	)
   

module.exports = router;
