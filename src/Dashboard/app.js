const express = require("express");
const session = require("express-session");
const app = express();
const passport = require("passport");
const { Strategy } = require("passport-discord");
const bodyparser = require("body-parser");
const path = require("path");
var favicon = require("serve-favicon");

module.exports.load = async (client) => {
	passport.serializeUser((user, done) => {
		done(null, user);
	});
	passport.deserializeUser((obj, done) => {
		done(null, obj);
	});

	let scopes = ["identify", "guilds"];

	passport.use(
		new Strategy(
			{
				clientID: client.user.id,
				clientSecret: client.config.secret,
				callbackURL: client.config.redirect,
				scope: scopes,
			},
			function (accessToken, refreshToken, profile, done) {
				process.nextTick(function () {
					return done(null, profile);
				});
			}
		)
	);

	app
		.use(function (req, res, next) {
			req.client.server.client = client;
			next();
		})
		.use(favicon(__dirname + "/public/img/favicon.ico"))
		.use(bodyparser.json())
		.use(bodyparser.urlencoded({ extended: false }))
		.engine("html", require("ejs").renderFile)
		.use(express.static(path.join(__dirname, "/public")))
		.set("view engine", "ejs")
		.set("views", path.join(__dirname, "views"))
		.use(
			session({
				secret: "0x41 Dashboard",
				resave: false,
				saveUninitialized: false,
			})
		)
		.use(passport.initialize())
		.use(passport.session())
		.use("/", require("./router/index"))
		.use("/profile", require("./router/profile"))
		.use("/servers", require("./router/servers"))
		.get("*", function (req, res) {
			res.redirect("/");
		});

	app.listen(process.env.PORT || 8000, function (err) {
		if (err) throw err;
		console.log(
			`[+] Dashboard is online at the port: ${process.env.PORT || 8000}`
		);
	});

	process.on("unhandledRejection", (r) => {
		console.dir(r);
	});
};
