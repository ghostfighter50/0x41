const Discord  = require('discord.js');

const agree    = "✅";
const disagree = "❎";

exports.run = async (bot, message) => {

  if (message.mentions.users.size === 0){
    return message.reply(":x: " + "| Please Mention A User To Kick!");
  }
  const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(`Vote ! `) 
.addField(`Vote to kick ${message.mentions.users.first().username}${message.mentions.users.first().discriminator}(50 Seconds)`, "react with ❎ to say no and with ✅ to say yes ")
.setColor(0x00AE86);

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply(":x: " + "| That User Does Not Seem Valid!");
  }

  if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
    return message.reply(":x: " + "| I need the \"KICK_MEMBERS\" permission!").catch(console.error);
  }

  await   message.react(agree);
  await message.react(disagree);

  const reactions = await message.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 10000});
  message.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.MessageEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
                                          "Total votes (NO): " + `${NO_Count-1}\n` +
                                          "----------------------------------------\n" +
                                          "NOTE: Votes needed to kick (3+)\n" +
                                          "----------------------------------------", true)

            .setURL("https://discord.gg/s6aFpGq")
            .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
            .setColor(0x00AE86);


  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {  
    })
  }else{

    message.channel.send("\n" + "SAFE..... FOR NOW");
  }

}