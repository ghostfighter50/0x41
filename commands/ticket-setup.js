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

    TicketMessage.awaitReactions((reaction, user) => user.id !== TicketMessage.author.id)

        .then(collected => {
            console.log(collected.first().emoji.name)
            if (collected.first().emoji.name == "📩") {

                collected.last().delete()

                message.guild.channels.create("ticket-" + j++)
                message.delete()

                    .then(channel => {

                        let category = message.guild.channels.cache.find(c => c.name == "TICKETS" && c.type == "category");
                        channel.setParent(category.id);
                        let CloseMessage = channel.send(CloseEmbed)
                        CloseMessage.react("🔒")
                        Closemessage.awaitReactions((reaction, user) => (reaction.emoji.name == "🔒" && user.id !== CloseMessage.author.id))

                            .then(collected => {
                                if (collected.first().emoji.name == "🔒") {
                                    channel.delete()
                                } else {
                                    collected.last().delete()
                                }

                            })
                    })
            } else {
                collected.last().delete()
            }
        })



}
