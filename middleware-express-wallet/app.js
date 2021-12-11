const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routing");
const myErrorLogger = require("./utilities/errorlogger");
const myRequestLogger = require("./utilities/requestlogger");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
//Cross Origin Access related Middleware
app.use(cors());
//Middleware for Parsing Request
app.use(bodyParser.json());
//Security Related Middlewares
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.frameguard());
//User defind Request Logging Middleware
app.use(myRequestLogger);
app.use("/", router);
//User defined Error Logging Middleware
app.use(myErrorLogger);
app.listen(3000);
console.log("Server listening in port 3000");
