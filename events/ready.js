
module.exports = client => {
  const activities_list = [
    `${client.guilds.cache.size} servers`, 
    `${client.channels.cache.size} channels`, 
    `${client.users.cache.size} users`, 
"Hack-Harder : https://discord.gg/s6aFpGq"];
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
    bot.user.setActivity(activities_list[index]); 
}, 10000); 

  console.log(`[+] Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);

};