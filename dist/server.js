import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import thoughtRoutes from "./routes/thoughtRoutes.js";
import connectDB from "./config/connection.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);
connectDB().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
