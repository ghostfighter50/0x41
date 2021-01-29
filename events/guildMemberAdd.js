module.exports = async (client, member) => {

    const Discord = require("discord.js")

    let channel = member.guild.channels.cache.find(c => c.name == "skid-test")

    let role = member.guild.roles.cache.find(role => role.id == 803625942647570493);
    let embed = new Discord.MessageEmbed()
        .setTitle(`New Member : ${member.user.username}`)
        .setDescription(`Welcome to 0x41 ${member}, pass the anti-skid test in DM's to acces the whole server`)
        .setColor(0x00AE86)
        .setThumbnail(member.avatarURL)
    await channel.send(embed)

    await member.send(new Discord.MessageEmbed().setDescription("Decode this string : `WW91IHBhc3NlZCB0aGUgZmlyc3QgcXVlc3Rpb24gISBQcmVwYXJlIGZvciB0aGUgc2Vjb25kIG9uZS4=`").setColor(0x00AE86))
        .then(question1 => {
            question1.channel.awaitMessages(response => response.content, {
                max: 1,
                time: 20000,
                errors: ['time'],
            }).then(collected => {
                if (collected.first().content == "You passed the first question ! Prepare for the second one.") {
                    let question2 = member.send(new Discord.MessageEmbed().setDescription("What does `boot` mean ? \n\n1️⃣ : Ddos attack\n2️⃣ : starting a computer").setColor(0x00AE86))
                    question2.react("1️⃣")
                    question2.react("2️⃣")
                    question2.awaitReactions(r => {
                            return ['1️⃣', '2️⃣'].includes(r.emoji.name)
                        }, {
                            max: 1
                        })
                        .then(collected => {
                            if (collected.first().emoji.name == "2️⃣") {
                                console.log("ok", collected)
                                let question3 = member.send(new Discord.MessageEmbed().setDescription("What does the `ls` command does on a UNIX system ?\n\n1️⃣ : List files\n2️⃣ : navigate into a directory").setColor(0x00AE86))
                                question3.react("1️⃣")
                                question3.react("2️⃣")
                                question3.awaitReactions(r => {
                                        return ['1️⃣', '2️⃣'].includes(r.emoji.name)
                                    }, {
                                        max: 1
                                    })
                                    .then(collected => {
                                        if (collected.first().emoji.name == "2️⃣") {
                                            member.send("Congratulations, you passed the test !")
                                            member.roles.add(role)
                                        } else {
                                            member.send("Too bad, you're a skid");
                                            //member.kick("Skid")
                                        }
                                    }).catch((e) => {
                                        console.log(e)
                                        //  channel.send('You didn\'t answer, we are forced to kick you.');
                                        //  member.kick("Didn't respond to the questionnaire")

                                    });

                            }

                        })
                        .catch((e) => {
                            console.log(e)
                            //channel.send('You didn\'t answer, we are forced to kick you.');
                            //  member.kick("Didn't respond to the questionnaire")
                        });

                } else {
                    member.send("Too bad, you're a skid");
                    //   member.kick("Skid")
                }
            }).catch((e) => {
                console.log(e)
                //channel.send('You didn\'t answer, we are forced to kick you.');
                // member.kick("Didn't respond to the questionnaire")
            });
        })
}
