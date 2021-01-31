const Discord = require("discord.js");
let j = 0
exports.run = async (client, message) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return

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

    TicketMessage.awaitReactions((reaction, user) => user.id !== TicketMessage.author.id, {max : 1})

        .then(collected => {
            console.log(collected.first().emoji.name)
            if (collected.first().emoji.name == "📩") {

                collected.first().remove()

                message.guild.channels.create("ticket-" + j++)
                    .then(channel => {
                        message.delete()
                        let category = message.guild.channels.cache.find(c => c.name == "TICKETS" && c.type == "category");
                        channel.setParent(category.id);
                        let CloseMessage = channel.send(CloseEmbed)
                        CloseMessage.react("🔒")
                        CloseMessage.awaitReactions((reaction, user) =>  user.id !== CloseMessage.author.id, {max : 1})

                            .then(collected => {
                                if (collected.first().emoji.name == "🔒") {
                                    channel.delete()
                                } else {
                                    collected.first().remove()
                                }

                            })
                    })
            } else {
                collected.first().remove()
            }
        })



}
