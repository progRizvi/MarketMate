import express from "express";
const app = express();

// all routes goes here

const router = express.Router();

// base route
router.get("/", (req, res) => {
	res.send("Hello World!");
});

// export app as routes
export { router as routes };
