import express from "express";
import cors from "cors";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({limit: '10mb'})); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // to support URL-encoded bodies

// Routes
app.use("/api/jobs", jobRoutes);

export default app;
