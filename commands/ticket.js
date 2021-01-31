const Discord = require("discord.js");
let j = 0
exports.run = async (client, message) => {


    const TicketEmbed = new Discord.MessageEmbed()
        .setTitle("Tickets")
        .setDescription("React with 📩 to create a ticket")
        .setColor(0x00AE86)

    const CloseEmbed = new Discord.MessageEmbed()
        .setTitle("Close Ticket")
        .setDescription("React with 🔒 to close the ticket")
        .setColor(0x00AE86)

    let TicketMessage = await message.channel.send(TicketEmbed)

    await TicketMessage.react('📩')
    
    TicketMessage.awaitReactions((reaction, user) => user.id !== TicketMessage.author.id, {
            max: 1
        })

        .then(collected => {
            if (collected.first().emoji.name == "📩") {
            TicketMessage.delete()

                collected.first().remove()

                message.guild.channels.create("ticket-" + j++ ,{
                  permissionOverwrites: [{
                      id: message.author.id,
                      allow: 'VIEW_CHANNEL'
                    }]
                })
                      .then(channel => {
                       
                      //  message.delete()
                        let category = message.guild.channels.cache.find(c => c.name == "TICKETS" && c.type == "category");
                        channel.setParent(category.id);
                        let CloseMessage = channel.send(CloseEmbed).then(msg => {
                            msg.react("🔒")
                            msg.awaitReactions((reaction, user) => user.id !== client.user.id, {
                                    max: 1
                                })
                                .then(collected => {
                                    if (collected.first().emoji.name == "🔒") {
                                        channel.delete()
                                    } else {
                                        collected.first().remove()
                                    }

                                })
                        })
                    })
            } else {
                collected.first().remove()
            }
        })

}
