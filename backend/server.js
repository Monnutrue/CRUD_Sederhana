import express, { Router } from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/userRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/datapegawai_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
