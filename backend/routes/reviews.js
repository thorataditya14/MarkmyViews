// require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require('express')
const router = express.Router()
const Review = require("../models/Review");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/verifyAuth.js");
router.use(express.json())


// Create review
router.post("/create-review", verifyToken, async (req, res) => {
    try {
        const { userid, bookid, rating, review } = req.body;

        if (!(userid && bookid && rating && review))
            return res.status(400).send({ MSG: "All input is required" });

        const createdReview = await Review.create({
            userid,
            bookid,
            rating,
            review
        });

        res.status(201).send(createdReview);
    } catch (err) {
        console.log(err);
    }
});


// Get all reviews
router.get("/get-reviews", async (req, res) => {
    try {
        const QUERIES = req.query

        const reviews = await Review.find(QUERIES).populate("userid", ["firstname", "lastname"])

        reviews.reverse()

        if (!reviews.length)
            return res.status(409).send({ MSG: "No reviews found" });

        return res.status(201).send(reviews);
    } catch (err) {
        console.log(err);
    }
});


// Get Individual review
router.get("/get-review/:reviewid", async (req, res) => {
    try {
        const reviewdetails = await Review.findById(req.params.reviewid).populate("userid", ["firstname", "lastname"])

        if (!reviewdetails)
            return res.status(409).send({ MSG: "No review with given id" });

        return res.status(201).send(reviewdetails);
    } catch (err) {
        console.log(err);
    }
});


// Update review
router.put("/update-review/:reviewid", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewid)

        if (!review)
            return res.status(409).send({ MSG: "No review with given id" });

        const reviewdetails = {
            userid: req.body.userid || review.userid,
            bookid: req.body.bookid || review.bookid,
            rating: req.body.rating || review.rating,
            review: req.body.review || review.review,
        }

        const updatedReview = await Review.findByIdAndUpdate(
            req.params.reviewid,
            reviewdetails,
            { new: true }
        );

        return res.status(200).send(updatedReview);
    } catch (err) {
        console.log(err);
    }
});


// Delete review
router.delete("/delete-review/:reviewid", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewid)

        if (!review)
            return res.status(409).send({ MSG: "No review with given id" });

        const deletedReview = await Review.findByIdAndDelete(req.params.reviewid)

        return res.status(200).send(deletedReview);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;