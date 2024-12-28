import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
const app = express();

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

import userRoute from "./routes/user.route.js";

app.use("/v1/user", userRoute);

app.listen(8001 || process.env.PORT, () => {
  console.log(
    `Server is up and running on the port ${process.env.PORT || 8001}`
  );
});
