// session configuration

import { config } from "dotenv";

config();

const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	name: process.env.SESSION_NAME,
	lifetime: process.env.SESSION_LIFETIME,
	secure: process.env.SESSION_SECURE,
	httpOnly: process.env.SESSION_HTTP_ONLY,
	sameSite: process.env.SESSION_SAME_SITE,
};

export default sessionConfig;
import * as appConfig from "dotenv";
