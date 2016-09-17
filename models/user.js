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

userSchema.statics.authenticate = function(username, password, callback) {
    User.findOne({username: username}, function(error, user) {
        if(error) {
            return callback(error);
        }

        if(!user) {
            var error = new Error("username에 매칭되는 유저가 없습니다.");
            return callback(error);
        }

        bcrypt.compare(password, user.password, function(error, result) {
            if(error) {
                return callback(error);
            }

            if(result) {
                return callback(null, user);
            } else {
                var error = new Error("일치하는 유저가 없습니다.");
                return callback(error);
            }
        });
    });
}

var User = mongoose.model("User", userSchema);

module.exports = User;
