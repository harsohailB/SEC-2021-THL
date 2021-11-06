require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
const mongoose = require("mongoose");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var http = require("http");
var debug = require("debug")("app");

// models go here
// require("./models/User");
require("./models/User");
require("./models/Transaction");
require("./models/Watchlist");
require("./models/Transaction");

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI environment variable not defined");
  process.exit(0);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routers go here
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var userRouter = require("./routes/users");

// hook up routers to express app
const routers = [
  indexRouter,
  authRouter,
  userRouter
]
for (const router of routers) {
  app.use(router);
}
 
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

const port = normalizePort(process.env.PORT || "6000");
app.set("port", port);
var server = http.createServer(app);

// require("./io")(server);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/* from boilerplate */

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
