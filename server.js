const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// // const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

//middlewares
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
// app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
