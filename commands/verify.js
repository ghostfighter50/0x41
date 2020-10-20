const Discord = require('discord.js');
const flag = require("../flag.json")
module.exports.run = async (client, message) => {
let args = message.content.slice(4).split(' ')

function exists(args, path){
    var flags = path;
console.log(flags);
if (args in flags) {
    return true;
}
else {return false }
}
var result = exists(args[1], flag.ctf)
var obj = JSON.parse(result)
if()
}