require("./db");
import express, { Application, Request, Response } from "express";
import "dotenv/config";
import duolingoRoute from "./routes/duolingodays.routes";
import gameRoute from "./routes/game.routes";
import portfolioRoute from "./routes/portfolio.routes";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello thre toto");
});

app.use("/duolingo", duolingoRoute);
app.use("/game", gameRoute);
app.use("/portfolio", portfolioRoute);

let PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log("\x1b[33m%s\x1b[0m", `http://localhost:${PORT}/`)
);

module.exports = app;
