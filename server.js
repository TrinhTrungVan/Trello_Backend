import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/index.js";
import connectDB from "./database/index.js";

dotenv.config();

//Connect to Database
connectDB();

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use("/", (req, res) => {
    res.send("TrungVan");
});

route(app);

app.listen(process.env.PORT);
