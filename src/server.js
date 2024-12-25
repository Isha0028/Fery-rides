import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import rideRoutes from "./routes/rides.js";
import connectToMongodb from "./config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", rideRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectToMongodb();
  console.log(`Server running on port ${PORT}`);
});
