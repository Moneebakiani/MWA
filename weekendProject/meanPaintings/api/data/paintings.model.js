const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    review:
    {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        //required: true
    }

});

const paintingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdYear: Number,
    artist: String,
    reviews: [reviewSchema]

});

mongoose.model("Painting", paintingSchema, "paintings");