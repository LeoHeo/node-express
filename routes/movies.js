var express = require("express");
var router = express.Router();

var Movie = require("../models/movie");

router.get("/", function(request, response) {
    var query = request.query.search || "";
    var mongoQuery = {
        title: {
            $regex: ".*" + query + ".*"
        }
    };

    Movie.find(mongoQuery, function(error, movies) {
        return response.render("movies", {
            movieItems: movies
        });
    });
});

module.exports = router;
