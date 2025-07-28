import express, { Response, Request } from "express";
import userRouter from "./routes/user.route";
import noteRouter from "./routes/note.route";
import dotenv from "dotenv";
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors(), express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    res.send("my third server using express, mongoose and mongodb");
  } catch (err) {
    res.status(500).json({ error: "a server side error occurred" });
  }
});

app.use("/api/user", userRouter);
app.use("/api/note", noteRouter);

app.listen(PORT, () => {
  console.log(`App is Listening on port: ${PORT}`);
});
