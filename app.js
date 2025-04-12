const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./utils/globalErrorHandler");

const app = express();
app.use(morgan("tiny"));

app.use(globalErrorHandler);

module.exports = app;
