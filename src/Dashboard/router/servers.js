const express = require('express')
const router = express.Router()
const CheckAuth = require('../auth/CheckAuth')
const ConfigManager = require('../Classes/ConfigManager')
router
  .get('/:guildID', CheckAuth, (req, res) => {
    const serv = req.client.server.client.guilds.cache.get(req.params.guildID)
    if (!serv) {
      return res.redirect(
				`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=client&permissions=8&guild_id=${req.params.guildID}`
      )
    }
    if (
      !req.client.server.client.guilds.cache
        .get(req.params.guildID)
        .members.cache.get(req.user.id)
        .hasPermission('MANAGE_GUILD')
    ) { return res.redirect('/dashboard') }
    res.render('guild.ejs', {
      status: req.isAuthenticated()
        ? `${req.user.username}#${req.user.discriminator}`
        : 'Login',
      client: req.client.server.client.user,
      user: req.user,
      avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
      iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
      guild: serv
    })
  })
  .get('/:guildID/settings', CheckAuth, (req, res) => {
    Object.keys(require.cache).forEach(function (key) { delete require.cache[key] })
    const serv = req.client.server.client.guilds.cache.get(req.params.guildID)
    const config = require('../../../serverconfig.json')
    if (!serv) {
      return res.redirect(
				`https://discordapp.com/oauth2/authorize?client_id=${req.client.server.client.user.id}&scope=client&permissions=8&guild_id=${req.params.guildID}`
      )
    }
    if (
      !req.client.server.client.guilds.cache
        .get(req.params.guildID)
        .members.cache.get(req.user.id)
        .hasPermission('MANAGE_GUILD')
    ) { return res.redirect('/dashboard') }
    if (req.query.msg && req.query.type) {
      res.render('settings.ejs', {
        status: req.isAuthenticated()
          ? `${req.user.username}#${req.user.discriminator}`
          : 'Login',
        client: req.client.server.client,
        user: req.user,
        avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
        guild: serv,
        config: config,
        message: { value: req.query.msg, type: req.query.type }
      })
    } else {
      res.render('settings.ejs', {
        status: req.isAuthenticated()
          ? `${req.user.username}#${req.user.discriminator}`
          : 'Login',
        client: req.client.server.client,
        user: req.user,
        avatarURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
        iconURL: `https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`,
        guild: serv,
        config: config,
        message: null
      })
    }
  })
  .post('/:guildID', CheckAuth, async function (req, res) {
    if (!req.body.send_CHANNELID && req.body.send_CHANNELID === 'NOT_SET') { return res.send('Error, no message specified.') }
    if (!req.body.send_MESSAGE && req.body.send_MESSAGE.length === 0) { return res.send('Error, no message specified.') }
    await req.client.server.client.guilds.cache
      .get(req.params.guildID)
      .channels.cache.get(req.body.send_CHANNELID)
      .send(req.body.send_MESSAGE)
    await res.redirect(`/servers/${req.params.guildID}`)
  })
  .post('/:guildID/settings', CheckAuth, async function (req, res) {
    const manager = new ConfigManager(req.params.guildID)

    console.log(req.body)
    if (req.body.EmbedColor !== '#000000') {
      manager.SetColor(req.body.EmbedColor)
    }
    if (req.body.JoinMesagge !== '') {
      manager.SetJoinMessage(req.body.JoinMessage)
    }
    if (req.body.LeaveMessage !== '') {
      manager.SetLeaveMessage(req.body.LeaveMessage)
    }
    if (req.body.Autorole !== 'none') {
      manager.SetAutorole(req.body.Autorole)
    }
    if (req.body.VerifiedRole !== 'none') {
      manager.SetVerified(req.body.VerifiedRole)
    }
    if (req.body.UnverifiedRole !== 'none') {
      manager.SetUnverified(req.body.UnverifiedRole)
    }
    if (req.body.WelcomeChannel !== 'none') {
      manager.UpdateWelcome(req.body.WelcomeChannel)
    }
    if (req.body.ReportChannel !== 'none') {
      manager.UpdateReport(req.body.ReportChannel)
    }
    if (req.body.TestChannel !== 'none') {
      manager.UpdateTest(req.body.TestChannel)
    }
    if (req.body.Raidmode !== 'none') {
      manager.RaidMode(req.body.RaidMode)
    }
    if (req.body.Levels !== 'none') {
      manager.Levels(req.body.Levels)
    }
    if (req.body.SkidVerification !== 'none') {
      manager.SkidTest(req.body.SkidVerification)
    }
    if (req.body.JoinLogger !== 'none') {
      manager.JoinLogger(req.body.JoinLogger)
    }
    manager.refresh()
    res.redirect(
			`/servers/${req.params.guildID}/settings?msg=Settings Updated !&type=success`
    )
  })
  .post('/:guildID/settings/reset', CheckAuth, async function (req, res) {
    const manager = new ConfigManager(req.params.guildID)
    manager.reset()
    res.redirect(
			`/servers/${req.params.guildID}/settings?msg=Settings Reseted !&type=danger`
    )
  })
  .post('/:guildID/settings/clear/flags', CheckAuth, async function (req, res) {
    const manager = new ConfigManager(req.params.guildID)
    manager.ClearFLags()
		 res.redirect(
			`/servers/${req.params.guildID}/settings?msg=Autoroles Cleared !&type=danger`
    )
  })
  .post(
    '/:guildID/settings/clear/autoroles',
    CheckAuth,
    async function (req, res) {
      const manager = new ConfigManager(req.params.guildID)
      manager.ClearAutoroles()
      res.redirect(
				`/servers/${req.params.guildID}/settings?msg=Flags Cleared !&type=danger`
      )
    }
  )
module.exports = router
