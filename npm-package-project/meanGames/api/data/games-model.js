const mongoose = require("mongoose");
const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    country: String,
    location: {

        // coordinates: {
        //     type: [Number],
        //     index: "2dspehere"
        // } //longitude(E/W), latitude(N/S)
    }
});
const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    review: String,
    createdOn: {
        type: Date
    }

});
const gamesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }, //String,
    price: Number,
    year: Number,
    minPlayers: {
        type: Number,
        min: 1,
        max: 10
    },
    maxPlayers: Number,
    minAge: {
        type: Number,
        min: 4
    },
    rate: {
        type: Number,
        min: 1,
        max: 5,
        "default": 1
    },
    designers: [String],

    publisher: publisherSchema,
    reviews: [reviewSchema],
    images: [String]
});



mongoose.model("Game", gamesSchema, "games");