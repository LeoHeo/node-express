var express = require("express");
var router = express.Router()

router.get("/", function(req, res) {
    return res.render("home", {animals: ["dog", "cat", "python"]});
});

module.exports = router;
