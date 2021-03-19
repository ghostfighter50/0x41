module.exports = {
	name: "clear",
	description: "clears the specified amount of messages",
	aliases: ["del", "purge"],
	usage: "sudo clear <amount>",
	type: "mod",
	admin: false,
	run: async (client, message, args) => {
		const userinp = parseInt(args[0], 10);

		if (!message.member.hasPermission("MANAGE_MESSAGES")) {
			return message.reply("❌ You are not allowed to use this command.");
		}

		if (isNaN(userinp)) {
			return message.reply("❌ Please supply a number of messages to delete.");
		}

		if (userinp > 100 || userinp < 2) {
			return message.reply(
				"❌ Please supply a number between 2 and 100 to delete."
			);
		}

		message.channel.bulkDelete(userinp + 1).then((messages) => {
			message.channel
				.send(`✅ deleted ${messages.size - 1} messages`)
				.then((message) => message.delete({ timeout: 1000 }));
		});
	},
};
