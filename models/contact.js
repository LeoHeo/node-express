var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: String,
    email: String,
    phonenumber: String
});

var Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
