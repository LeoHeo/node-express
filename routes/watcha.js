var express = require("express");
var router = express.Router();
var Movie = require("../models/movie");

var httpRequest = require("request");

router.get("/", function(req, res) {
    var query = req.query.query || "";
    // 정규표현식 => "_____부산행_____"
    // ".*부산행.*"

    var mongoQuery = {
        title: {
            $regex: ".*" + query + ".*"
        }
    }; // 이름 검색

    Movie.find(mongoQuery, function(error, movies) {
        return res.render("watcha", {
            newsItems: movies
        });
    });
});


module.exports = router;
