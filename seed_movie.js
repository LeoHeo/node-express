var mongoose = require("mongoose");
var Movie = require("./models/movie");
var request = require("request");

mongoose.connect("mongodb://localhost/node");
var db = mongoose.connection;

// 맨 처음 한번만
db.once("open", function() {
    console.log("mongo db is connected..");

    var url = "https://watcha.net/home/news.json?page=1&per=100";
    request.get(url, function(error, response, body) {
        var data = JSON.parse(body);
        var newsItems = data.news;
        var movieItems = [];

        newsItems.forEach(function(newsItem) {
            var movieItem = {
                title: newsItem.title,
                content: newsItem.content,
                image: newsItem.image
            };
            movieItems.push(movieItem);
        });

        Movie.collection.insert(movieItems, function(error, movie) {
            if(error) throw error;
            console.log("Successfully added");
            
            db.close(function() {
                console.log("Database is disconneted..");
            });
        });

    });
});
