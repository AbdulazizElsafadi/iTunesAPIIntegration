import express from "express";
import { searchITunes } from "./controllers/itunesController";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/search", searchITunes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
