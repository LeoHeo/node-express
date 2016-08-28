// models는 단수로 씀
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 1. Shema 만들기
var movieSchema = new Schema({
    title: String,
    content: String,
    image: String
});

// 2. Schema 기반으로 Model 만들기
var Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
