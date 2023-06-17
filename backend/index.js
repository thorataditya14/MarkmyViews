// configure dotenv
require("dotenv").config()


// import modeules
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")


// import routes
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const booksRoute = require('./routes/books')
const reviewsRoute = require('./routes/reviews')


// server port
const PORT = process.env.API_PORT || 8000;


// middlewares
app.set('trust proxy', true)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// use routes
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/books", booksRoute)
app.use("/reviews", reviewsRoute)


// database connection
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("database connected successfully")
} catch (error) {
    console.log("database connection failed. exiting now...")
    console.error(error)
    process.exit(1)
}


// welcome route
app.get("/", (req, res) => {
    res.status(200).send("welcome, backend server is running")
})


// server listening 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
