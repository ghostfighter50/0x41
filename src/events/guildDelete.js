module.exports = async (client, guild) => {
  const fs = require('fs')
  const config = require('../../../serverconfig.json')
  delete client.serverconfig[guild.id]
  fs.writeFileSync(client.serverconfig.path, JSON.stringify(config, null, 2))
}
