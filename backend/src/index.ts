require("./db");
require("dotenv").config();

import express, { Application, Request, Response } from "express";
import gameRoute from "./routes/game.routes";
import cors from "cors";

const app: Application = express();
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.use("/game", gameRoute);

let PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log("\x1b[33m%s\x1b[0m", `http://localhost:${PORT}/`)
);

module.exports = app;
