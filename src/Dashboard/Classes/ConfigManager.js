class ConfigManager {
	constructor(guild) {
		this.client = require("../../bot");
		this.fs = require("fs");
		this.data = this.fs.readFileSync("../../../serverconfig.json");
		this.config = JSON.parse(this.data);
		this.guild = guild;
	}
	UpdateReport(channel) {
		this.config[this.guild].ReportChannel = channel;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	UpdateTest(channel) {
		this.config[this.guild].TestChannel = channel;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	UpdateWelcome(channel) {
		this.config[this.guild].WelcomeChannel = channel;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	JoinLogger(status) {
		if (status == "true") status = true;
		else if (status == "false") status = false;
		this.config[this.guild].JoinLogger = status;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SkidTest(status) {
		if (status == "true") status = true;
		else if (status == "false") status = false;
		this.config[this.guild].SkidVerification = status;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	Levels(status) {
		if (status == "true") status = true;
		else if (status == "false") status = false;
		this.config[this.guild].Levels = status;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetColor(hex) {
		this.config[this.guild].EmbedColor = hex;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetLevel(number, role, points) {
		if (isNaN(parseFloat(points))) return false;

		if (number == "1") this.config[this.guild].LevelRoles.level1 = role;
		else if (number == "2") this.config[this.guild].LevelRoles.level2 = role;
		else if (number == "3") this.config[this.guild].LevelRoles.level3 = role;
		else return false;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetFLag(name, value, points) {
		if (isNaN(parseFloat(points))) return false;
		this.config[this.guild].Flags.push({
			name: name,
			value: value,
			points: points,
		});
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	RaidMode(status) {
		if (status == "true") status = true;
		else if (status == "false") status = false;

		this.config[this.guild].RaidMode = status;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetVerified(role) {
		this.config[this.guild].VerifiedRole = role;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetUnverified(role) {
		this.config[this.guild].UnverifiedRole = role;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetJoinMessage(message) {
		this.config[this.guild].JoinMessage = message;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetLeaveMessage(message) {
		this.config[this.guild].LeaveMessage = message;
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	SetAutorole(role) {
		if (role === null) this.config[this.guild].autoroles.push(role);
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	ClearAutoroles() {
		this.config[this.guild].autoroles = [];
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	ClearFLags() {
		this.config[this.guild].Flags = [];
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}
	reset() {
		this.config[this.guild] = {};
		this.config[this.guild].JoinMessage = "Welcome {user} to {guild}";
		this.config[this.guild].LeaveMessage = ":x: {user} left...";
		this.config[this.guild].RaidMode = false;
		this.config[this.guild].Levels = false;
		this.config[this.guild].JoinLogger = true;
		this.config[this.guild].SkidVerification = false;
		this.config[this.guild].WelcomeChannel = "";
		this.config[this.guild].ReportChannel = "";
		this.config[this.guild].TestChannel = "";
		this.config[this.guild].autoroles = [];
		this.config[this.guild].VerifiedRole = "";
		this.config[this.guild].UnverifiedRole = "";
		this.config[this.guild].EmbedColor = "0x00AE86";
		this.config[this.guild].LevelRoles = {};
		this.config[this.guild].LevelRoles.level1 = "";
		this.config[this.guild].LevelRoles.level2 = "";
		this.config[this.guild].LevelRoles.level3 = "";
		this.config[this.guild].Flags = [{}];
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
	}

	refresh() {
		//	console.log(this.config[this.guild])
		this.fs.writeFileSync(
			this.client.config.path,
			JSON.stringify(this.config, null, 2)
		);
		this.client.serverconfig = this.config;
	}
}

module.exports = ConfigManager;
