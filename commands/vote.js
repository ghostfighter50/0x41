const Discord  = require('discord.js');

const agree    = "✅";
const disagree = "❎";

exports.run = async (client, message) => {
    let args = message.content.slice(10).split(' ');

const verified = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL)
.setURL("https://discord.gg/s6aFpGq")
.setFooter("Hack-Harder : https://discord.gg/s6aFpGq")
.setTitle(`Vote ! `) 
.addField(`Question: ${question} \nVote now! (Vote time: 2min)`, "react with ❎ to say no and with ✅ to say yes ")
.setColor(0x00AE86);
  let question = args
  if(question.length < 1){
    let msg = await message.channel.send(`Vote now! (Vote time: 2min)`);
    await msg.react(agree);
    await msg.react(disagree);

    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 120000});
    msg.delete();

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
                                            "----------------------------------------", true)

            .setColor(0x00AE86)
            .setURL("https://discord.gg/s6aFpGq")
            .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")    
    await message.channel.send({embed: sumsum});
  }else if(question.length > 1){
    let msg = await message.channel.send(`Question: ${question} \nVote now! (Vote time: 2min)`);
    await msg.react(agree);
    await msg.react(disagree);
    
    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 120000});
    msg.delete();
    
    var NO_Count = reactions.get(disagree).count;
    var YES_Count = reactions.get(agree);
    
    if(YES_Count == undefined){
      var YES_Count = 1;
    }else{
      var YES_Count = reactions.get(agree).count;
    }
  
    var sumsum = new Discord.MessageEmbed()
    
              .addField("Voting Finished:", "----------------------------------------\n" +
                                            "Question: " + question + "\n" +
                                            "Total votes (Yes): " + `${YES_Count-1}\n` +
                                            "Total votes (NO): " + `${NO_Count-1}\n` +
                                            "----------------------------------------", true)
  
              .setColor(0x00AE86)
              .setURL("https://discord.gg/s6aFpGq")
              .setFooter("Hack-Harder : https://discord.gg/s6aFpGq")    
    await message.channel.send({embed: sumsum});
  }
  

}