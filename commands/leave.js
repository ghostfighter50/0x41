exports.run = async (client, message) => {
	if (!message.member.id == 655346300958670848) return;
	message.delete();
	message.guild.leave();
};
