module.exports = async (client, member) => {
	const Discord = require("discord.js");
	if (client.serverconfig[member.guild.id].RaidMode == true) return member.kick();

	if (client.serverconfig[member.guild.id].JoinMessage == false) return;

	let WelcomeChannel = member.guild.channels.cache.find(
		(c) => c.id == client.serverconfig[member.guild.id].WelcomeChannel
	);
	let channel = member.guild.channels.cache.find(
		(c) => c.id == client.serverconfig[member.guild.id].TestChannel
	);

	client.serverconfig[member.guild.id].autoroles.forEach((role) => {
		let autorole = member.guild.roles.cache.find((r) => r.id == role);
		member.roles.add(autorole);
	});

	client.points.ensure(`${member.guild.id}-${member.id}`, {
		user: member.id,
		guild: member.guild.id,
		points: 0,
	});

	let role = member.guild.roles.cache.find(
		(role) => role.id == client.serverconfig[member.guild.id].VerifiedRole
	);
	let delrole = member.guild.roles.cache.find(
		(role) => role.id == client.serverconfig[member.guild.id].UnverifiedRole
	);

	member.roles.add(delrole);
	let embed = new Discord.MessageEmbed()
		.setTitle(`New Member : ${member.user.username}`)
		.setDescription(
			client.serverconfig[member.guild.id].JoinMessage.replace(
				"{user}",
				member
			).replace("{guild}", member.guild.name)
		)
		.setColor(client.serverconfig[member.guild.id].EmbedColor)
		//.setImage("https://cdn.discordapp.com/attachments/782327092368506903/814909037320601610/unknown.png")
		.setThumbnail(member.avatarURL);

	let verifiedembed = new Discord.MessageEmbed()
		.setTitle(`✅ ${member.user.username} Passed the test`)
		.setColor(client.serverconfig[member.guild.id].EmbedColor)
		.setThumbnail(member.avatarURL);

	let deniedembed = new Discord.MessageEmbed()
		.setTitle(`❌ ${member.user.username} failed the test`)
		.setColor(client.serverconfig[member.guild.id].EmbedColor)
		.setThumbnail(member.avatarURL);
	let errorembed = new Discord.MessageEmbed()
		.setTitle(
			`❌ to activate the skid test you must define the verified and unverified role`
		)
		.setColor(client.serverconfig[member.guild.id].EmbedColor)
		.setThumbnail(member.avatarURL);
	await member.send(embed).catch(() => {
		return channel.send(
			`:x: Could not send a DM to ${member}, activate server DMs and rejoin  the server !`
		);
	});

	if (client.serverconfig[member.guild.id].SkidVerification == false) return;
	else if (client.serverconfig[member.guild.id].SkidVerification == true) {
		if (role == undefined) return channel.send(errorembed);
		let question1 = await member.send(
			new Discord.MessageEmbed()
				.setDescription(
					"Decode this string : `WW91IHBhc3NlZCB0aGUgZmlyc3QgcXVlc3Rpb24gISBQcmVwYXJlIGZvciB0aGUgc2Vjb25kIG9uZS4=`"
				)
				.setColor(client.serverconfig[member.guild.id].EmbedColor)
		);

		question1.channel
			.awaitMessages((response) => response.content, {
				max: 1,
			})

			.then(async (collected) => {
				if (
					collected.first().content ==
					"You passed the first question ! Prepare for the second one."
				) {
					await member.send("✅ Correct Answer,  1/3");

					let question2 = await member.send(
						new Discord.MessageEmbed()
							.setDescription(
								"What does `boot` mean ? \n\n1️⃣ : Ddos attack\n2️⃣ : starting a computer"
							)
							.setColor(client.serverconfig[member.guild.id].EmbedColor)
					);

					const Filter1 = (reaction, user) => user.id !== question2.author.id;

					await question2.react("1️⃣");
					await question2.react("2️⃣");

					question2
						.awaitReactions(Filter1, {
							max: 1,
						})

						.then(async (collected) => {
							if (collected.first().emoji.name == "2️⃣") {
								await member.send("✅ Correct Answer,  2/3");

								let question3 = await member.send(
									new Discord.MessageEmbed()
										.setDescription(
											"What does the `ls` command does on a UNIX system ?\n\n1️⃣ : List files\n2️⃣ : navigate into a directory"
										)
										.setColor(client.serverconfig[member.guild.id].EmbedColor)
								);

								const Filter2 = (reaction, user) =>
									user.id !== question3.author.id;

								await question3.react("1️⃣");
								await question3.react("2️⃣");

								question3
									.awaitReactions(Filter2, {
										max: 1,
									})

									.then(async (collected1) => {
										if (collected1.first().emoji.name == "1️⃣") {
											await member.send(
												"✅ Congratulations, you passed the test ! 3/3"
											);

											await member.roles.add(role);
											await member.roles.remove(delrole);
											await WelcomeChannel.send(embed);
											await channel.send(verifiedembed);
										} else if (collected1.first().emoji.name == "2️⃣") {
											await member.send(
												"❌ Incorrect Answer, you're going to be kicked 2/3"
											);
											await channel.send(deniedembed);
											await member.kick();
										}
									});
							} else if (collected.first().emoji.name == "1️⃣") {
								member.send(
									"❌ Incorrect Answer, you're going to be kicked 1/3"
								);
								channel.send(deniedembed);
								member.kick();
							}
						});
				} else {
					member.send("❌ Incorrect Answer, you're going to be kicked 0/3");
					channel.send(deniedembed);
					member.kick();
				}
			});
	}
};
