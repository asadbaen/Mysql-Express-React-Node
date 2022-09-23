import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/configDatabase.js";
// import Users from "./models/UserModel.js";
import router from "./router/index.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("database connect");
  // await Users.sync();
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("hallo");
});
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`API is running http://localhost:${PORT}`);
});
