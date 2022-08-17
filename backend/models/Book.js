const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
    {
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        tile: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: true
        },
        rating: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model("Product", ProductSchema);