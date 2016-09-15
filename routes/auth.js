var express = require("express");
var router = express.Router();
var User = require("../models/user");


router.route("/login/")
    .get(function(req, res) {
        return res.render("auth/login");
    });


router.route("/signup/")
    .get(function(req, res) {
       return res.render("auth/signup"); 
    })
    .post(function(req, res) {
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        var user = new User({
            username: username,
            email: email,
            password: password
        });

        user.save(function(error, user) {
            console.log(error);
            return res.redirect("/");
        });
    
    });

module.exports = router;
