appConfig.config();

const config = {
	app: {
		name: process.env.APP_NAME,
		version: process.env.APP_VERSION,
		env: process.env.APP_ENV,
		debug: process.env.APP_DEBUG,
		logLevel: process.env.APP_LOG_LEVEL,
		url: process.env.APP_URL,
	},
	port: process.env.PORT,
	jwtSecret: process.env.JWT_SECRET,
	clientUrl: process.env.CLIENT_URL,
	database: {
		url: process.env.DATABASE_URL,
		provider: process.env.DATABASE_PROVIDER || "mysql",
	},
	logging: {
		level: process.env.LOG_LEVEL || "info",
		dir: process.env.LOGGER_DIR || "logs",
		file: process.env.LOGGER_FILE || "app.log",
		format: process.env.LOGGER_FORMAT || "development",
	},
	smtp: {
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
};

module.exports = config;
import { dir } from "console";
import * as appConfig from "dotenv";
