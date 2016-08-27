var express = require("express");
var router = express.Router();

var httpRequest = require("request");

router.get("/", function(req, res) { 
    var url = "https://watcha.net/home/news.json?page=1&per=20";

    httpRequest(url, function(error, httpResponse, body) {
        var data = JSON.parse(body);
        return res.render("watcha", {newsItems: data["news"]});
    });
});


module.exports = router;
