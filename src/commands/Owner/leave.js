module.exports.run = async (client, message) => {
	if (!message.member.id == 655346300958670848) return;
	message.delete();
	message.guild.leave();
	
};
module.exports = {
	name: 'leave',
	description: 'leaves the current guild',
	aliases: ['l-g'],
	usage: 'sudo leave',
	type: "dev",
	admin:false
};