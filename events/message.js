module.exports = (client, message) => {
    if (message.author.bot) return;
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command);
    
    if (message.mentions.has(client.user.id)) {
        message.channel.reply("my prefix is `sudo`, try `sudo help` to see all my commands.");
    };
    
    if (message.guild) {
        if(client.points.has(`${message.guild.id}-${message.author.id}`, 0) == true ) console.log("ok")
        else {
         client.points.ensure(`${message.guild.id}-${message.author.id}`, {
          user: message.author.id,
          guild: message.guild.id,
          points: 0,
        });
      } 
    }
    if (!cmd) return;
  
    cmd.run(client, message, args);
  };
