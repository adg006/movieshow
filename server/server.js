import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

await connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Movie Show API");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
