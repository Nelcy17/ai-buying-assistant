import express from "express";
import queryRoutes from "./routes/queryRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));


// test route
app.get("/", (req, res) => {
  res.send("API Running");
});

// main route
app.use("/api", queryRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});



