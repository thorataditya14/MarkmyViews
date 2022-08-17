const mongoose = require("mongoose");


const ReviewSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true
        },
        review: {
            type: String,
            default: false
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model("Review", ReviewSchema);