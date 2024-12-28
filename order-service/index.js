import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});
const app = express();

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

import orderRoute from "./routes/order.route.js";

app.use("/v1/order", orderRoute);

app.listen(8000 || process.env.PORT, () => {
  console.log(
    `Server is up and running on the port ${process.env.PORT || 8000}`
  );
});

// we can also have db connnection then run the app else we can throw error
