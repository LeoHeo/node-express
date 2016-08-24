var path = require("path");
var express = require("express");

var app = express();

var router = require("./router");

// 1. Application Settings
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware - logger(log를 기록하는 Middleware)
app.use(function(req, res, next) {
    console.log("Requested on: ", req.url);
    next(); // 그 다음 callback func을 실행시킨다.
});

app.use("/", router);


app.listen(8080, function() {
    console.log("Server is running");
});
