module.exports = async (client, guild) => {
const fs = require("fs")
let config = require("../config.json")
let defaultsettings = 
`,"${guild.id}" : {
    "Levels" : false,
    "JoinMessage" : true,
    "SkidVerification" : true,
    "WelcomeChannel": "",
    "ReportChannel": "",
    "TestChannel": "",
    "autoroles": [ ],
    "VerifiedRole": "",
    "UnverifiedRole": "",
    "EmbedColor": "0x00AE86",
    "LevelRoles": {
    "level1": "",
    "level2": "",
    "level3": ""
    }
}
`
fs.appendFileSync("/root/Downloads/0x41/config.json", JSON.stringify(config, null, 2));

}