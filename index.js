const express = require("express");
const app = express();
const env = require("dotenv");
env.config({ path: "./config/.env" });

const db = require("./config/db");
const router = require("./routes/userRoute");

db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  next();
});

app.use("/api/v4", router);

app.listen(process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT || 5000}`)
);
