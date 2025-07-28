import express, { Response, Request } from "express";
import userRouter from "./routes/user.route";
import noteRouter from "./routes/note.route";
const cors = require("cors");

const app = express();
const PORT = 3000;

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
