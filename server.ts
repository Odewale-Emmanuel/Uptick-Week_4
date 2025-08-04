import express, { Response, Request } from "express";
import userRouter from "./routes/user.route";
import noteRouter from "./routes/note.route";
import signInRouter from "./routes/signin.route";
import signUpRouter from "./routes/signup.route";
import { expressjwt } from "express-jwt";
import dotenv from "dotenv";
import { tokenAuthenticaton } from "./middleware/authenticate-user-token";
const cors = require("cors");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  }),
  express.json()
);

app.get("/", async (req: Request, res: Response) => {
  try {
    res.send("my third server using express, mongoose and mongodb");
  } catch (err) {
    res.status(500).json({ error: "a server side error occurred" });
  }
});

app.use("/api/sign-up", signUpRouter);
app.use("/api/sign-in", signInRouter);
app.use("/api/user", tokenAuthenticaton, userRouter);
app.use("/api/note", tokenAuthenticaton, noteRouter);

app.listen(PORT, () => {
  console.log(`App is Listening on port: ${PORT}`);
});
