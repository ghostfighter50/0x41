
module.exports = client => {
  const activities_list = [
    `${client.guilds.cache.size} servers`, 
    `${client.channels.cache.size} channels`, 
    `${client.users.cache.size} users`, 
"sudo help"];
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
    client.user.setActivity(activities_list[index],{type : "WATCHING"}); 
}, 1500); 

  console.log(`[+] Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);

};
