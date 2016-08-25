var express  = require("express");
var router = express.Router();

var httpRequest = require("request");

// Router
router.get("/", function(req, res) {
    return res.render("home", {animals: ["dog", "cat", "python"]});
});

router.get("/about/", function(req, res) {
    return res.render("about");
});

router.get("/watcha/", function(req, res) {
    var url = "https://watcha.net/home/news.json?page=1&per=20";

    httpRequest(url, function(error, httpResponse, body) {
        var data = JSON.parse(body);
        return res.render("watcha", {newsItems: data["news"]});
    });
});

module.exports = router;
