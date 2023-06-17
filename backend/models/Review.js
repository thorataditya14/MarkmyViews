const mongoose = require("mongoose");


const ReviewSchema = new mongoose.Schema(
    {
        userid: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref:"User"
        },
        bookid: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref:"Book"
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