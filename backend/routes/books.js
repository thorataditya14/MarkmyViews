// require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require('express')
const jwt = require("jsonwebtoken");
const router = express.Router()
const Book = require("../models/Book");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/verifyAuth.js");
router.use(express.json())


// Create book
router.post("/create-book", verifyTokenAndAdmin, async (req, res) => {
    try {
        const { title, authors, desc, imgurl, categories } = req.body;
        let isbn = req.body.isbn

        if (!(isbn && title && authors && desc && imgurl && categories))
            return res.status(400).send({ MSG: "All input is required" });

        const oldBook = await Book.findOne({ isbn: isbn });
        if (oldBook)
            return res.status(400).send({ MSG: "Book already exists" });

        isbn = req.body.isbn.replaceAll("-", "")

        const createdBook = await Book.create({
            isbn,
            title,
            authors,
            desc,
            imgurl,
            categories,
        });

        res.status(201).send(createdBook);
    } catch (err) {
        console.log(err);
    }
});


// Get all books
router.get("/get-books", async (req, res) => {
    try {
        const QUERIES = req.query

        const books = await Book.find(QUERIES)

        if (!books.length)
            return res.status(409).send({ MSG: "No books found" });

        return res.status(201).send(books);
    } catch (err) {
        console.log(err);
    }
});


// Get Individual book
router.get("/get-book/:bookid", async (req, res) => {
    try {
        const bookdetails = await Book.findById(req.params.bookid)

        if (!bookdetails)
            return res.status(409).send({ MSG: "No book with given id" });

        return res.status(201).send(bookdetails);
    } catch (err) {
        console.log(err);
    }
});


// Update book
router.put("/update-book/:bookid", verifyTokenAndAdmin, async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookid)

        if (!book)
            return res.status(409).send({ MSG: "No book with given id" });

        const bookdetails = {
            title: req.body.title || book.title,
            authors: req.body.authors || book.authors,
            desc: req.body.desc || book.desc,
            imgurl: req.body.imgurl || book.imgurl,
            categories: req.body.categories || book.categories
        }

        if (req.body.isbn)
            bookdetails.isbn = req.body.isbn.replaceAll("-", "") || book.isbn

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.bookid,
            bookdetails,
            { new: true }
        );

        return res.status(200).send(updatedBook);
    } catch (err) {
        console.log(err);
    }
});


// Delete book
router.delete("/delete-book/:bookid", verifyTokenAndAdmin, async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookid)

        if (!book)
            return res.status(409).send({ MSG: "No book with given id" });

        const deletedBook = await Book.findByIdAndDelete(req.params.bookid)

        return res.status(200).send(deletedBook);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;