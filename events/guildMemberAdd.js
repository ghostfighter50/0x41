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
                        member.send('Correct Answer,  1/3')
                        member.send(new Discord.MessageEmbed().setDescription("What does `boot` mean ? \n\n1️⃣ : Ddos attack\n2️⃣ : starting a computer").setColor(0x00AE86))
                            .then(question2 => {
                                question2.react("1️⃣")
                                question2.react("2️⃣")
                                question2.awaitReactions((reaction, user) => (reaction.emoji.name == '1️⃣' || reaction.emoji.name == '2️⃣' ), {
                                        max: 3,
                                    })
                                    .catch(err => console.log(err))
                                    .then(collected => {
                                        console.log(collected)
                                        if (collected.last().emoji.name == '2️⃣'  ) {
                                            member.send('Correct Answer,  2/3')
                                                .catch(err => console.log(err));
                                            member.send(new Discord.MessageEmbed().setDescription("What does the `ls` command does on a UNIX system ?\n\n1️⃣ : List files\n2️⃣ : navigate into a directory").setColor(0x00AE86))
                                                .then(question3 => {
                                                    question3.react("1️⃣")
                                                    question3.react("2️⃣")
                                                    question3.awaitReactions((reaction, user) => (reaction.emoji.name == '1️⃣' || reaction.emoji.name == '2️⃣' ), {
                                                            max: 3,
                                                        })
                                                        .then(collected1 => {
                                                        console.log(collected1)
                                                            if (collected1.last().emoji.name == '1️⃣') {

                                                                member.send("Congratulations, you passed the test ! 3/3")
                                                                member.roles.add(role)
                                                            } else if (collected1.last().emoji.name == '2️⃣' ) {
                                                                member.send('Incorect Answer, you\'re going to be kicked');
                                                               // member.kick()
                                                                    //.catch(err => console.log(err));
                                                            }
                                                        })
                                                })
                                        } else if (collected.last().emoji.name == '1️⃣'){
                                            member.send('Incorect Answer, you\'re going to be kicked');
                                            //member.kick()
                                                //.catch(err => console.log(err));
                                        }
                                    })

                            })
                    }

                })
                .catch((e) => {
                    console.log(e)
                    //channel.send('You didn\'t answer, we are forced to kick you.');
                    //  member.kick("Didn't respond to the questionnaire")
                });
        })


}
