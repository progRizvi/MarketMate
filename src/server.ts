import "dotenv/config";
import app from "./app";
import prisma from "./config/db";

const PORT = process.env.PORT || 5000;

async function startServer() {
	try {
		await prisma.$connect();
		console.log("✅ Database connected");

		app.listen(PORT, () => {
			console.log(`🚀 Server running on http://localhost:${PORT}`);
		});

		app.get("/", (req, res) => {
			res.send("Hello World!");
		});

		process.on("SIGINT", async () => {
			await prisma.$disconnect();
			process.exit(0);
		});
	} catch (error) {
		console.error("❌ Error starting server:", error);
		process.exit(1);
	}
}

startServer();
