import "dotenv/config";
import express from "express";
import cors from "cors";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";
import connectDB from "./config/db.js";
import { inngest, functions } from "./inngest/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/inngest", serve({ client: inngest, functions }));

await connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Movie Show API");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
