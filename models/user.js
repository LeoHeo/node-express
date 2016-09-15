var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: String,
    phonenumber: String,
    created_at: Date,
    updated_at: Date
});

userSchema.pre("save", function(next) {
    var user = this;

    bcrypt.hash(user.password, 10, function(error, hash) {
       user.password = hash;
       next(); 
    });

    user.created_at = user.created_at || new Date();
    user.updated_at = new Date();
});

var User = mongoose.model("User", userSchema);

module.exports = User;
