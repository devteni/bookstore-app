const express = require("express")
const router = express.Router()
const { createNewBook, fetchAllBooks, fetchSingleBook, updateSingleBook, deleteSingleBook } = require("../controllers/bookControllers");

//POST request to /books to create a new book
router.post("/books", createNewBook)

//GET request to /books to fetch all books
router.get("/books", fetchAllBooks)

//GET request to /books/id to fetch a single book
router.get("/books/:id", fetchSingleBook)

//PUT request to /books/id to update a single book
router.put("/books/:id", updateSingleBook)
// DELETE request to /books/id to delete
router.delete("/books/:id", deleteSingleBook)

module.exports = router