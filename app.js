require("dotenv").config();

const express = require("express");
const consign = require("consign");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const logger = require("./config/logger");

const app = express();

app.use(logger.express.requests);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));

consign()
  .include("controllers")
  .include("routes")
  .into(app);

app.use(logger.express.errors);

module.exports = app;
