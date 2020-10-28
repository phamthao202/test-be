var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");

var app = express();
const db = mongoose.connect("mongodb://localhost:27017/test-PhamThao", {
  useNewUrlParser: true,
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
