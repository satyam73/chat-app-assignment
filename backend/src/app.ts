require("dotenv").config();
import express, { Request, Response } from "express";
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const dateInUnix = Date.now();
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(express.json({ type: "application/json" }));
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is working fine!" });
});

app.get("/health", (req: Request, res: Response) => {
  const currentDateInUnix: number = Number(
    ((Date.now() - dateInUnix) / 1000).toFixed(2)
  );
  res.json({ uptime: currentDateInUnix });
});

app.listen(port, () => {
  return console.log(`Express server is listening at http://localhost:${port}`);
});
