import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// api routes
app.use("/api", routes);

export default app;
