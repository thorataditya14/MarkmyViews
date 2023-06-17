const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema(
    {
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true,
        },
        authors: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        imgurl: {
            type: String,
            required: true
        },
        categories: [{
            type: String,
            required: true
        }]
    },
    { timestamps: true }
);


module.exports = mongoose.model("Book", BookSchema);