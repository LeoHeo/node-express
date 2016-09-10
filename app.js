// depencies
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

var homeRouter = require("./routes/home");
var aboutRouter = require("./routes/about");
var watchaRouter = require("./routes/watcha.js");
var movieRouter = require("./routes/movies");

mongoose.connect("mongodb://localhost/node");
var db = mongoose.connection;

// 맨 처음 한번만
db.once("open", function() {
    console.log("mongo db is connected..");
});


// 1. Application Settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware - logger(log를 기록하는 Middleware)
app.use(function(req, res, next) {
    console.log("Requested on: ", req.url);
    next(); // 그 다음 callback func을 실행시킨다.
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/", homeRouter);
app.use("/about/", aboutRouter);
app.use("/watcha/", watchaRouter);
app.use("/movies/", movieRouter);

app.listen(3000, function() {
    console.log("Server is running");
});
