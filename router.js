var express  = require("express");
var router = express.Router();

// Router
router.get("/", function(req, res) {
    return res.render("home", {animals: ["dog", "cat", "python"]});
});

router.get("/about", function(req, res) {
    return res.render("about");
});

module.exports = router;
