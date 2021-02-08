module.exports = async (client, member) => {

    const Discord = require("discord.js")
    let chatChannel = member.guild.channels.cache.find(c => c.id == 808328017687347231)
    let channel = member.guild.channels.cache.find(c => c.name == "skid-test")
    let role = member.guild.roles.cache.find(role => role.id == 808327986377261086);
    let delrole = member.guild.roles.cache.find(role => role.id == 808328008040841236);
   client.points.ensure(`${member.guild.id}-${member.id}`, {
          user: member.id,
          guild: member.guild.id,
          points: 0,
        });
    let embed = new Discord.MessageEmbed()
        .setTitle(`New Member : ${member.user.username}`)
        .setDescription(`Welcome to 0x41 ${member}, pass the anti-skid test in DM's to acces the whole server`)
        .setColor(0x00AE86)
        .setThumbnail(member.avatarURL)

    let verifiedembed = new Discord.MessageEmbed()
        .setTitle(`✅ ${member.user.username} Passed the test`)
        .setColor(0x00AE86)
        .setThumbnail(member.avatarURL)

    let deniedembed = new Discord.MessageEmbed()
        .setTitle(`❌ ${member.user.username} failed the test`)
        .setColor(0x00AE86)
        .setThumbnail(member.avatarURL)

    await channel.send(embed)
   


    let question1 = await member.send(new Discord.MessageEmbed().setDescription("Decode this string : `WW91IHBhc3NlZCB0aGUgZmlyc3QgcXVlc3Rpb24gISBQcmVwYXJlIGZvciB0aGUgc2Vjb25kIG9uZS4=`").setColor(0x00AE86))


    question1.channel.awaitMessages(response => response.content, {
            max: 1
        })

        .then(async collected => {

            if (collected.first().content == "You passed the first question ! Prepare for the second one.") {

                await member.send('✅ Correct Answer,  1/3')

                let question2 = await member.send(new Discord.MessageEmbed().setDescription("What does `boot` mean ? \n\n1️⃣ : Ddos attack\n2️⃣ : starting a computer").setColor(0x00AE86))

                const Filter1 = (reaction, user) => user.id !== question2.author.id;

                await question2.react("1️⃣")
                await question2.react("2️⃣")

                question2.awaitReactions(Filter1, {
                        max: 1
                    })

                    .then(async collected => {

                        if (collected.first().emoji.name == '2️⃣') {

                            await member.send('✅ Correct Answer,  2/3')

                            let question3 = await member.send(new Discord.MessageEmbed().setDescription("What does the `ls` command does on a UNIX system ?\n\n1️⃣ : List files\n2️⃣ : navigate into a directory").setColor(0x00AE86))

                            const Filter2 = (reaction, user) => user.id !== question3.author.id;

                            await question3.react("1️⃣")
                            await question3.react("2️⃣")

                            question3.awaitReactions(Filter2, {
                                    max: 1
                                })

                                .then(async collected1 => {

                                    if (collected1.first().emoji.name == '1️⃣') {

                                        await member.send("✅ Congratulations, you passed the test ! 3/3")

                                        await member.roles.add(role)
                                        await member.roles.remove(delrole)
                                        await channel.send(verifiedembed)
                                        await chatChannel.send(verifiedembed)
                                        
                                    } else if (collected1.first().emoji.name == '2️⃣') {

                                        await member.send('❌ Incorrect Answer, you\'re going to be kicked 2/3');
                                        channel.send(deniedembed)
                                        member.kick()

                                    }
                                })

                        } else if (collected.first().emoji.name == '1️⃣') {

                            member.send('❌ Incorrect Answer, you\'re going to be kicked 1/3');
                            channel.send(deniedembed)
                            member.kick()
                        }
                    })

            } else {

                member.send('❌ Incorrect Answer, you\'re going to be kicked 0/3');
                channel.send(deniedembed)
                member.kick()
            }
        })

}
