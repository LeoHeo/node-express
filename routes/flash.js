var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    return res.redirect("/flash/result/");
});

router.get("/flash/result/", function(req, res) {
    return res.json(request.flash());
});

module.exports = router;
