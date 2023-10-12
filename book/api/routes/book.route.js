const express = require("express");
const {getBook, postBook, getBookById, getBookByTitle, getBookByGenre, getBookByYear, putBook, deleteBook} = require("../controllers/book.controller")

const route = express.Router()

route.get("/", getBook)

route.get("/id/:id", getBookById)

route.get("/name/:name", getBookByTitle)

route.get("/type/:type", getBookByGenre)

route.get("/expireDate", getBookByYear)

route.post("/uploadBook", postBook)

route.put("/:id", putBook)

route.delete("/:id", deleteBook)

module.exports = route